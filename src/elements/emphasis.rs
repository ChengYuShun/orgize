use bytecount::count;
use memchr::memchr_iter;

#[inline]
pub(crate) fn parse(text: &str, marker: u8) -> Option<(&str, &str)> {
    debug_assert!(text.len() >= 3);

    let bytes = text.as_bytes();

    if bytes[1].is_ascii_whitespace() {
        return None;
    }

    for i in memchr_iter(marker, bytes).skip(1) {
        if count(&bytes[1..i], b'\n') >= 2 {
            break;
        } else if validate_marker(i, text) {
            return Some((&text[i + 1..], &text[1..i]));
        }
    }

    None
}

fn validate_marker(pos: usize, text: &str) -> bool {
    if text.as_bytes()[pos - 1].is_ascii_whitespace() {
        false
    } else if let Some(&post) = text.as_bytes().get(pos + 1) {
        match post {
            b' ' | b'-' | b'.' | b',' | b':' | b'!' | b'?' | b'\'' | b'\n' | b')' | b'}' => true,
            _ => false,
        }
    } else {
        true
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn parse() {
        use super::parse;

        assert_eq!(parse("*bold*", b'*'), Some(("", "bold")));
        assert_eq!(parse("*bo*ld*", b'*'), Some(("", "bo*ld")));
        assert_eq!(parse("*bo\nld*", b'*'), Some(("", "bo\nld")));
        assert_eq!(parse("*bold*a", b'*'), None);
        assert_eq!(parse("*bold*", b'/'), None);
        assert_eq!(parse("*bold *", b'*'), None);
        assert_eq!(parse("* bold*", b'*'), None);
        assert_eq!(parse("*b\nol\nd*", b'*'), None);
    }
}
