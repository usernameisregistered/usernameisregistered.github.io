---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

head:
  - - link
    - href: ./static/style/home.css
      rel: stylesheet
  - - link
    - href: ./static/logo.svg
      rel: icon
      type: text/css

hero:
  name: "路人甲的进阶之路"
  text: "星光不问赶路人,时光不负有心人"
  image:
    src: ./static/logo.svg
    alt: 路人甲的进阶之路
  actions:
    - theme: brand
      text: 教程
      link: /categoryList
    - theme: alt
      text: 随笔
      link: /article