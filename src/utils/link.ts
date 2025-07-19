// 决定链接是在当前窗口打开( _self )还是新窗口打开( _blank )
export function getLinkTarget(link: string) {
  return link.includes('http') ? '_blank' : '_self'
}

export function isExternalLink(link: string) {
  return link.includes('http')
}
