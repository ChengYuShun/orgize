#[macro_use]
macro_rules! handle_event {
    ($event:expr, $handler:expr, $writer:expr) => {
        use crate::parser::Event::*;

        match $event {
            HeadlineBeg(hdl) => $handler.headline_beg($writer, hdl)?,
            HeadlineEnd => $handler.headline_end($writer)?,
            SectionBeg => $handler.section_beg($writer)?,
            SectionEnd => $handler.section_end($writer)?,
            ParagraphBeg => $handler.paragraph_beg($writer)?,
            ParagraphEnd => $handler.paragraph_end($writer)?,
            CtrBlockBeg => $handler.ctr_block_beg($writer)?,
            CtrBlockEnd => $handler.ctr_block_end($writer)?,
            QteBlockBeg => $handler.qte_block_beg($writer)?,
            QteBlockEnd => $handler.qte_block_end($writer)?,
            SplBlockBeg { name, args } => $handler.spl_block_beg($writer, name, args)?,
            SplBlockEnd => $handler.spl_block_end($writer)?,
            CommentBlock { cont, args } => $handler.comment_block($writer, cont, args)?,
            ExampleBlock { cont, args } => $handler.example_block($writer, cont, args)?,
            ExportBlock { cont, args } => $handler.export_block($writer, cont, args)?,
            SrcBlock { cont, args } => $handler.src_block($writer, cont, args)?,
            VerseBlock { cont, args } => $handler.verse_block($writer, cont, args)?,
            DynBlockBeg { name, args } => $handler.dyn_block_beg($writer, name, args)?,
            DynBlockEnd => $handler.dyn_block_end($writer)?,
            ListBeg { ordered } => $handler.list_beg($writer, ordered)?,
            ListEnd { ordered } => $handler.list_end($writer, ordered)?,
            ListItemBeg { bullet } => $handler.list_beg_item($writer, bullet)?,
            ListItemEnd => $handler.list_end_item($writer)?,
            Call { value } => $handler.call($writer, value)?,
            Planning(p) => $handler.planning($writer, p)?,
            Clock => $handler.clock($writer)?,
            Timestamp(t) => $handler.timestamp($writer, t)?,
            Comment(c) => $handler.comment($writer, c)?,
            FixedWidth(f) => $handler.fixed_width($writer, f)?,
            TableStart => $handler.table_start($writer)?,
            TableEnd => $handler.table_end($writer)?,
            TableCell => $handler.table_cell($writer)?,
            LatexEnv => $handler.latex_env($writer)?,
            FnDef { label, cont } => $handler.fn_def($writer, label, cont)?,
            Keyword { key, value } => $handler.keyword($writer, key, value)?,
            Rule => $handler.rule($writer)?,
            Cookie(cookie) => $handler.cookie($writer, cookie)?,
            FnRef { label, def } => $handler.fn_ref($writer, label, def)?,
            InlineSrc { lang, option, body } => $handler.inline_src($writer, lang, option, body)?,
            InlineCall {
                name,
                args,
                inside_header,
                end_header,
            } => $handler.inline_call($writer, name, args, inside_header, end_header)?,
            Link { path, desc } => $handler.link($writer, path, desc)?,
            Macros { name, args } => $handler.macros($writer, name, args)?,
            RadioTarget { target } => $handler.radio_target($writer, target)?,
            Snippet { name, value } => $handler.snippet($writer, name, value)?,
            Target { target } => $handler.target($writer, target)?,
            BoldBeg => $handler.bold_beg($writer)?,
            BoldEnd => $handler.bold_end($writer)?,
            ItalicBeg => $handler.italic_beg($writer)?,
            ItalicEnd => $handler.italic_end($writer)?,
            StrikeBeg => $handler.strike_beg($writer)?,
            StrikeEnd => $handler.strike_end($writer)?,
            UnderlineBeg => $handler.underline_beg($writer)?,
            UnderlineEnd => $handler.underline_end($writer)?,
            Verbatim(cont) => $handler.verbatim($writer, cont)?,
            Code(cont) => $handler.code($writer, cont)?,
            Text(cont) => $handler.text($writer, cont)?,
        }
    };
}

mod html;

pub use html::*;
