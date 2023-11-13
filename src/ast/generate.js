const nodes = [
  {
    struct: "Document",
    kind: ["DOCUMENT"],
    pre_blank: true,
    first_child: [
      ["section", "Section"],
      ["first_headline", "Headline"],
    ],
    last_child: [["last_headline", "Headline"]],
    children: [["headlines", "Headline"]],
  },
  {
    struct: "Section",
    kind: ["SECTION"],
    post_blank: true,
  },
  {
    struct: "Paragraph",
    kind: ["PARAGRAPH"],
    post_blank: true,
  },
  {
    struct: "Headline",
    kind: ["HEADLINE"],
    first_child: [
      ["title", "HeadlineTitle"],
      ["section", "Section"],
      ["tags", "HeadlineTags"],
      ["planning", "Planning"],
      ["priority", "HeadlinePriority"],
    ],
    children: [["headlines", "Headline"]],
    token: [
      ["stars", "HEADLINE_STARS"],
      ["keyword", "HEADLINE_KEYWORD"],
    ],
    post_blank: true,
  },
  {
    struct: "HeadlineStars",
    kind: ["HEADLINE_STARS"],
    parent: [["headline", "Headline"]],
  },
  {
    struct: "HeadlineTitle",
    kind: ["HEADLINE_TITLE"],
    parent: [["headline", "Headline"]],
  },
  {
    struct: "HeadlineKeyword",
    kind: ["HEADLINE_KEYWORD"],
    parent: [["headline", "Headline"]],
  },
  {
    struct: "HeadlinePriority",
    kind: ["HEADLINE_PRIORITY"],
    parent: [["headline", "Headline"]],
    token: [["text", "TEXT"]],
  },
  {
    struct: "HeadlineTags",
    kind: ["HEADLINE_TAGS"],
    parent: [["headline", "Headline"]],
  },
  {
    struct: "PropertyDrawer",
    kind: ["PROPERTY_DRAWER"],
    children: [["node_properties", "NodeProperty"]],
  },
  {
    struct: "NodeProperty",
    kind: ["NODE_PROPERTY"],
  },
  {
    struct: "Planning",
    kind: ["PLANNING"],
    last_child: [
      ["deadline", "PlanningDeadline"],
      ["scheduled", "PlanningScheduled"],
      ["closed", "PlanningClosed"],
    ],
  },
  {
    struct: "PlanningDeadline",
    kind: ["PLANNING_DEADLINE"],
  },
  {
    struct: "PlanningScheduled",
    kind: ["PLANNING_SCHEDULED"],
  },
  {
    struct: "PlanningClosed",
    kind: ["PLANNING_CLOSED"],
  },
  {
    struct: "OrgTable",
    kind: ["ORG_TABLE"],
    post_blank: true,
  },
  {
    struct: "OrgTableRow",
    kind: ["ORG_TABLE_RULE_ROW", "ORG_TABLE_STANDARD_ROW"],
  },
  {
    struct: "OrgTableCell",
    kind: ["ORG_TABLE_CELL"],
  },
  {
    struct: "List",
    kind: ["LIST"],
    children: [["items", "ListItem"]],
  },
  {
    struct: "ListItem",
    kind: ["LIST_ITEM"],
    first_child: [["content", "ListItemContent"]],
    token: [
      ["indent", "LIST_ITEM_INDENT"],
      ["bullet", "LIST_ITEM_BULLET"],
    ],
  },
  {
    struct: "ListItemIndent",
    kind: ["LIST_ITEM_INDENT"],
  },
  {
    struct: "ListItemTag",
    kind: ["LIST_ITEM_TAG"],
  },
  {
    struct: "ListItemBullet",
    kind: ["LIST_ITEM_BULLET"],
  },
  {
    struct: "ListItemContent",
    kind: ["LIST_ITEM_CONTENT"],
  },
  {
    struct: "Drawer",
    kind: ["DRAWER"],
  },
  {
    struct: "DynBlock",
    kind: ["DYN_BLOCK"],
  },
  {
    struct: "Keyword",
    kind: ["KEYWORD"],
  },
  {
    struct: "BabelCall",
    kind: ["BABEL_CALL"],
  },
  {
    struct: "TableEl",
    kind: ["TABLE_EL"],
    post_blank: true,
  },
  {
    struct: "Clock",
    kind: ["CLOCK"],
    post_blank: true,
  },
  {
    struct: "FnDef",
    kind: ["FN_DEF"],
    post_blank: true,
  },
  {
    struct: "Comment",
    kind: ["COMMENT"],
    post_blank: true,
    token: [["text", "TEXT"]],
  },
  {
    struct: "Rule",
    kind: ["RULE"],
    post_blank: true,
  },
  {
    struct: "FixedWidth",
    kind: ["FIXED_WIDTH"],
    post_blank: true,
    token: [["text", "TEXT"]],
  },
  {
    struct: "SpecialBlock",
    kind: ["SPECIAL_BLOCK"],
  },
  {
    struct: "QuoteBlock",
    kind: ["QUOTE_BLOCK"],
  },
  {
    struct: "CenterBlock",
    kind: ["CENTER_BLOCK"],
  },
  {
    struct: "VerseBlock",
    kind: ["VERSE_BLOCK"],
  },
  {
    struct: "CommentBlock",
    kind: ["COMMENT_BLOCK"],
  },
  {
    struct: "ExampleBlock",
    kind: ["EXAMPLE_BLOCK"],
  },
  {
    struct: "ExportBlock",
    kind: ["EXPORT_BLOCK"],
  },
  {
    struct: "SourceBlock",
    kind: ["SOURCE_BLOCK"],
  },
  {
    struct: "InlineCall",
    kind: ["INLINE_CALL"],
  },
  {
    struct: "InlineSrc",
    kind: ["INLINE_SRC"],
  },
  {
    struct: "Link",
    kind: ["LINK"],
    token: [["path", "LINK_PATH"]],
  },
  {
    struct: "Cookie",
    kind: ["COOKIE"],
  },
  {
    struct: "RadioTarget",
    kind: ["RADIO_TARGET"],
  },
  {
    struct: "FnRef",
    kind: ["FN_REF"],
  },
  {
    struct: "LatexEnvironment",
    kind: ["LATEX_ENVIRONMENT"],
  },
  {
    struct: "Macros",
    kind: ["MACROS"],
  },
  {
    struct: "MacrosArgument",
    kind: ["MACROS_ARGUMENT"],
  },
  {
    struct: "Snippet",
    kind: ["SNIPPET"],
    token: [["name", "TEXT"]],
  },
  {
    struct: "Target",
    kind: ["TARGET"],
  },
  {
    struct: "Bold",
    kind: ["BOLD"],
  },
  {
    struct: "Strike",
    kind: ["STRIKE"],
  },
  {
    struct: "Italic",
    kind: ["ITALIC"],
  },
  {
    struct: "Underline",
    kind: ["UNDERLINE"],
  },
  {
    struct: "Verbatim",
    kind: ["VERBATIM"],
  },
  {
    struct: "Code",
    kind: ["CODE"],
    token: [["text", "TEXT"]],
  },
  {
    struct: "Timestamp",
    kind: ["TIMESTAMP_ACTIVE", "TIMESTAMP_INACTIVE", "TIMESTAMP_DIARY"],
    token: [
      ["year_start", "TIMESTAMP_YEAR"],
      ["month_start", "TIMESTAMP_MONTH"],
      ["day_start", "TIMESTAMP_DAY"],
      ["hour_start", "TIMESTAMP_HOUR"],
      ["minute_start", "TIMESTAMP_MINUTE"],
    ],
    last_token: [
      ["year_end", "TIMESTAMP_YEAR"],
      ["month_end", "TIMESTAMP_MONTH"],
      ["day_end", "TIMESTAMP_DAY"],
      ["hour_end", "TIMESTAMP_HOUR"],
      ["minute_end", "TIMESTAMP_MINUTE"],
    ],
  },
];

let content = `//! generated file, do not modify it directly
#![allow(clippy::all)]
#![allow(unused)]

use rowan::ast::{support, AstChildren, AstNode};
use crate::syntax::{OrgLanguage, SyntaxKind, SyntaxKind::*, SyntaxNode, SyntaxToken};
`;

for (const node of nodes) {
  content += `
#[derive(Debug, Clone, PartialEq, Eq, Hash)]
pub struct ${node.struct} {
    pub(crate) syntax: SyntaxNode,
}
impl AstNode for ${node.struct} {
    type Language = OrgLanguage;
    fn can_cast(kind: SyntaxKind) -> bool { ${node.kind
      .map((k) => `kind == ${k}`)
      .join(" || ")} }
    fn cast(node: SyntaxNode) -> Option<${
      node.struct
    }> { Self::can_cast(node.kind()).then(|| ${node.struct} { syntax: node }) }
    fn syntax(&self) -> &SyntaxNode { &self.syntax }
}
impl ${node.struct} {\n`;
  for (const [method, kind] of node.token || []) {
    content += `    pub fn ${method}(&self) -> Option<SyntaxToken> { support::token(&self.syntax, ${kind}) }\n`;
  }
  for (const [method, kind] of node.last_token || []) {
    content += `    pub fn ${method}(&self) -> Option<SyntaxToken> { super::last_token(&self.syntax, ${kind}) }\n`;
  }
  for (const [method, kind] of node.parent || []) {
    content += `    pub fn ${method}(&self) -> Option<${kind}> { self.syntax.parent().and_then(${kind}::cast) }\n`;
  }
  for (const [method, kind] of node.first_child || []) {
    content += `    pub fn ${method}(&self) -> Option<${kind}> { support::child(&self.syntax) }\n`;
  }
  for (const [method, kind] of node.last_child || []) {
    content += `    pub fn ${method}(&self) -> Option<${kind}> { super::last_child(&self.syntax) }\n`;
  }
  for (const [method, kind] of node.children || []) {
    content += `    pub fn ${method}(&self) -> AstChildren<${kind}> { support::children(&self.syntax) }\n`;
  }
  if (node.post_blank) {
    content += `    pub fn post_blank(&self) -> usize { super::blank_lines(&self.syntax) }\n`;
  }
  if (node.pre_blank) {
    content += `    pub fn pre_blank(&self) -> usize { super::blank_lines(&self.syntax) }\n`;
  }
  content += `}\n`;
}

require("fs").writeFileSync(__dirname + "/generated.rs", content);