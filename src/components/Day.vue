<template>
  <div id="day">
     <Timeline pending class="day">
        <TimelineItem>
            <p class="time">1976年</p>
            <p class="content">Apple I 问世</p>
        </TimelineItem>
        <TimelineItem>
            <p class="time">1984年</p>
            <p class="content">发布 Macintosh</p>
        </TimelineItem>
        <TimelineItem>
            <p class="time">2007年</p>
            <p class="content">发布 iPhone</p>
        </TimelineItem>
        <TimelineItem>
            <p class="time">2010年</p>
            <p class="content">发布 iPad</p>
        </TimelineItem>
        <TimelineItem>
            <a href="#" class="more">查看更多</a>
        </TimelineItem>
    </Timeline>
  </div>
</template>
<script>
export default {
  name:"day"
}
</script>
<style scoped>
.day{
  padding-left: 40%;
}
  .time{
    font-size: 16px;
  }
  .content{
    font-size: 18px;
  }
  .more{
    font-size: 18px;
  }
</style>


