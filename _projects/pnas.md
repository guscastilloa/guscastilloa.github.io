---
layout: page
title: "Effects of out-word usage in colombian twitter data"
description: "Replication of Rathje, et al. (2021) and econometric extensions"
img: /assets/img/pnas/outwordsVSlogretweets_violin.jpg
category: work
---

In December 2023 I joined Professor [Tomas 
Rodriguez](https://sites.google.com/site/tomasrodriguezbarraquer/)'s 
project to replicate [Rathje et al., 
(2021)](https://doi.org/10.1073/pnas.2024292118) work on the effects of 
out-group targeting terms in social media platforms. Using a dataset of 
all the tweets done by colombian congresspeople (that had twitter 
accounts) in 2020-2021 we built a set of dictionaries of the out-group 
targeting terms, and after validating it, explored the incidence of 
out-word usage in both the virality of the tweets as well as the 
engagement (number of likes). We extended the analysis by tagging each 
tweet using the [BETO sentiment analysis 
model](https://huggingface.co/finiteautomata/beto-sentiment-analysis) 
and executed the same analyses exploiting the sentiment categorization 
as well as the emotion variables. We've explored a variety of 
econometric specifications and have consistently found the same results 
as Rathje, et al. (2021) in the sense that the presence of out-words is positively related to tweet virality (see Figure 1). 


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html 
        path="assets/img/pnas/weekly_coef_by_orientation.jpg" class="img-fluid" title="Figure 1" %}
    </div>
</div>
<div class="caption">
    Figure 1. Fixed effect coefficient of regressing log retweets on out-word usage for each week.
</div>

The emotional tag of our tweets also yielded the larger presence of anger-tagged tweets during the 8 most heated weeks of the 2021 national strike in Colombia (see Figure 2). Other relevant results will be eventually shared in the working paper.



<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html 
        path="assets/img/pnas/beto_emotion_by_week_area.jpg" class="img-fluid" title="Figure 2" %}
    </div>
</div>
<div class="caption">
    Figure 2. Tweets tagged by the BETO model as joy and anger are the most prevalent in all our period of study.
</div>

