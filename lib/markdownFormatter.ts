import { remark } from 'remark'
import html from 'remark-html'
import strip from 'strip-markdown'

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export async function markdownToPlainText(markdown: string) {
  const result = await remark().use(strip).process(markdown)
  return result.toString()
}