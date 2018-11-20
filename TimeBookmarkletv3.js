
//console.log(labor.start1) 
// SNIP
var labor = {
  start1:8,
  start1Ampm:0,
  end1:12,
  end1ampm:1,
  type1:"Labor",

  start2:1,
  start2Ampm:1,
  end2:5,
  end2ampm:1,
  type2:"Labor",
};

var lunch = {
  start:12,
  startAmpm:1,
  end:1,
  endAmpm:1,
  type:"Lunch",
};


var i;
for (i=0; i<5;i++)
{
  var timeSpan = 0;
  var j;
  for(j=0; j<2;j++)
  {
    addNew(i,'timeEntry');

  }
  document.getElementById("billingDetailItems"+ i + ".billingTimeSpans"+ timeSpan + ".startHourM").value = labor.start1;
  document.getElementById("billingDetailItems"+ i + ".billingTimeSpans"+ timeSpan + ".endHourM").value = labor.end1;
  document.getElementById("billingDetailItems"+ i + ".billingTimeSpans"+ timeSpan + ".startMeridiem").value = labor.start1Ampm;
  document.getElementById("billingDetailItems"+ i + ".billingTimeSpans"+ timeSpan + ".endMeridiem").value = labor.end1ampm;
  document.getElementById("billingDetailItems"+ i + ".billingTimeSpans"+ timeSpan + ".timeEntrySpanType").value = labor.type1;
  timeSpan ++;
  document.getElementById("billingDetailItems"+ i + ".billingTimeSpans"+ timeSpan + ".startHourM").value = lunch.start;
  document.getElementById("billingDetailItems"+ i + ".billingTimeSpans"+ timeSpan + ".endHourM").value = lunch.end;
  document.getElementById("billingDetailItems"+ i + ".billingTimeSpans"+ timeSpan + ".timeEntrySpanType").value = lunch.type;
  document.getElementById("billingDetailItems"+ i + ".billingTimeSpans"+ timeSpan + ".startMeridiem").value = lunch.startAmpm;
  document.getElementById("billingDetailItems"+ i + ".billingTimeSpans"+ timeSpan + ".endMeridiem").value = lunch.endAmpm;
  timeSpan ++;
  document.getElementById("billingDetailItems"+ i + ".billingTimeSpans"+ timeSpan + ".startHourM").value = labor.start2;
  document.getElementById("billingDetailItems"+ i + ".billingTimeSpans"+ timeSpan + ".endHourM").value = labor.end2;
  document.getElementById("billingDetailItems"+ i + ".billingTimeSpans"+ timeSpan + ".startMeridiem").value = labor.start2Ampm;
  document.getElementById("billingDetailItems"+ i + ".billingTimeSpans"+ timeSpan + ".endMeridiem").value = labor.end2ampm;
  document.getElementById("billingDetailItems"+ i + ".billingTimeSpans"+ timeSpan + ".timeEntrySpanType").value = labor.type2;
}








//SNIP



var billingDetailItem = 0;
function punch(p1)
{
  var p1
}



document.getElementById("billingDetailItems0.billingTimeSpans"+ timeSpan + ".startHourM").value = labor.start1;
document.getElementById("billingDetailItems0.billingTimeSpans"+ timeSpan + ".endHourM").value = labor.end1;
document.getElementById("billingDetailItems0.billingTimeSpans"+ timeSpan + ".startMeridiem").value = labor.start1Ampm;
document.getElementById("billingDetailItems0.billingTimeSpans"+ timeSpan + ".endMeridiem").value = labor.end1ampm;
document.getElementById("billingDetailItems0.billingTimeSpans"+ timeSpan + ".timeEntrySpanType").value = labor.type1;
addNew(0, 'timeEntry');
timeSpan ++;

document.getElementById("billingDetailItems0.billingTimeSpans"+ timeSpan + ".startHourM").value = lunch.start;
document.getElementById("billingDetailItems0.billingTimeSpans"+ timeSpan + ".endHourM").value = lunch.end;
document.getElementById("billingDetailItems0.billingTimeSpans"+ timeSpan + ".timeEntrySpanType").value = lunch.type;
document.getElementById("billingDetailItems0.billingTimeSpans"+ timeSpan + ".startMeridiem").value = lunch.startAmpm;
document.getElementById("billingDetailItems0.billingTimeSpans"+ timeSpan + ".endMeridiem").value = lunch.endampm;
addNew(0, 'timeEntry');
document.getElementById("billingDetailItems0.billingTimeSpans"+ timeSpan + ".startHourM").value = labor.start2;
document.getElementById("billingDetailItems0.billingTimeSpans"+ timeSpan + ".endHourM").value = labor.end2;
document.getElementById("billingDetailItems0.billingTimeSpans"+ timeSpan + ".startMeridiem").value = labor.start2Ampm;
document.getElementById("billingDetailItems0.billingTimeSpans"+ timeSpan + ".endMeridiem").value = labor.end2ampm;
document.getElementById("billingDetailItems0.billingTimeSpans"+ timeSpan + ".timeEntrySpanType").value = labor.type2;
