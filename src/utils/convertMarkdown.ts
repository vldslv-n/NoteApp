import marked from "marked"

marked.setOptions({
    "baseUrl": null,
    "breaks": false,
    "gfm": true,
    "headerIds": true,
    "headerPrefix": "",
    "highlight": null,
    "langPrefix": "language-",
    "mangle": true,
    "pedantic": false,
    "sanitize": false,
    "sanitizer": null,
    "silent": false,
    "smartLists": false,
    "smartypants": false,
    "xhtml": false
})

const createMarkdown = (content: string) => {
    return { __html: marked(content) };
}

export default createMarkdown