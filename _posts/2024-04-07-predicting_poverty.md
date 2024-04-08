---
layout: post
title: "Predicting Poverty"
author: "Gustavo Castillo"
date: "2024-04-07"
output:
  md_document:
    variant: gfm
    preserve_yaml: true
knit: (function(inputFile, encoding) {
    rmarkdown::render(inputFile,
                      encoding = encoding,
                      output_file = file.path(paste0(
                        "/Users/upar/Library/CloudStorage/GoogleDrive-gustavo.castillo.alvarez@gmail.com/Mon Drive/00-SCHOOL-G/0-University_1/0-Semestres PEG/2024-10/Complexity Global School/guscastilloa.github.io/_posts/",
                                                  Sys.Date(),
                                                  '-',
                                                  substr(basename(inputFile), 1, nchar(basename(inputFile)) - 4),
                                                  '.md'
                                                  )
                                              )
                      )
    })
---

# Introduction

``` r
data(iris)
```

# Data

``` r
plot(iris$Species)
```

![](/assets/img/posts/2024/predicting_poverty/unnamed-chunk-3-1.png)<!-- -->

## Descriptive Data
