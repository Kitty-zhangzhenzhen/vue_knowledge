Vue.directive('focus',{
  inserted:function(el){
    el.focus()
  }
})

{/* <input type="text" v-focus/> 用于input自动获取焦点*/}

Vue.directive('throttle',{
  inserted:function(el,binding){
    let{fn,event='click',delay=1000}=binding
    let timer=null;
    let flag=true;
    el.addEventListener(event,()=>{
      if(flag){
        flag=false
        fn.apply(this,arguments)
        timer=setTimeout(()=>{
          flag=true
          clearTimeout(timer)
          timer=null
        },delay)
      }
    })
  }
})
{/* <button v-throttle="{fn:postData,event:'click',delay:2000}">提交</button> 用于提交数据节流防止重复点击*/}