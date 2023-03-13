import MarkdownIt from "markdown-it";
import MarkdownItSub from "markdown-it-sub";
import MarkdownItSup from "markdown-it-sup";
import MarkdownItTexmath from "markdown-it-texmath";
import MarkdownItFootnote from "markdown-it-footnote";
import MarkdownItLinkAttrs from "markdown-it-link-attributes";
import katex from "katex";
import "katex/dist/katex.min.css";

const md = new MarkdownIt()
  .use(MarkdownItLinkAttrs, {
    attrs: {
      target: "_blank",
      rel: "noopener",
    },
  })
  .use(MarkdownItFootnote)
  .use(MarkdownItSub)
  .use(MarkdownItSup)
  .use(MarkdownItTexmath, {
    engine: katex,
    delimiters: ["dollars", "brackets"],
    katexOptions: { macros: { "\\RR": "\\mathbb{R}" } },
  });

export default md;
