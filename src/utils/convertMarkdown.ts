import marked from "marked"

marked.setOptions({
    "baseUrl": undefined,
    "breaks": false,
    "gfm": true,
    "headerIds": true,
    "headerPrefix": "",
    "highlight": undefined,
    "langPrefix": "language-",
    "mangle": true,
    "pedantic": false,
    "sanitize": false,
    "sanitizer": undefined,
    "silent": false,
    "smartLists": false,
    "smartypants": false,
    "xhtml": false
})

const createMarkdown = (content: string) => {
    return { __html: marked(content) };
}

export default createMarkdown