 /*
 getClass(classname) ��ȡָ��������Ԫ��
 classname  ָ��Ҫ��ȡԪ�ص�classname
 ˼·��
 1.�ж������
 2.��ȡ���е�Ԫ��
 3.Ԫ�ص������Ƿ�Ϊָ��������
 4.���������Ĵ��浽����
 5.��������

*/
   function gc(classname){
      if(document.getElementsByClassName){
        return document.getElementsByClassName(classname);
      }else{
        var cn=document.getElementsByTagName("*");
        var arr=[];
        for(var i=0;i<cn.length;i++){
          if(cn[i]==classname){
            arr.push(cn[i]);
          }
        }
        return arr;
      }
   }



 /*$����*/
function $(selecter,range){
  if(typeof selecter=="function"){
    window.onload=function(){
      selecter()
    }
  }else if(typeof selecter=="string"){
    range=range||document;
    //selecter=selecter.trim()������
    if(selecter.charAt(0)=="."){
      return gc(selecter.substring(1),range);
    }else if(selecter.charAt(0)=="#"){
      return range.getElementById(selecter.substring(1));
    }else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(selecter)){
      return range.getElementsByTagName(selecter);
    }else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(selecter)){
      return document.createElement(selecter,slice(1,-1));
    }
  }
}


  /*
  getContent(obj,value)
  ��ȡ������ֻobj���ı�
  obj   ָ������
  value   ��ɫָ�����ı�
  1���жϻ�ȡ��������
     ��������
     value
  2���ж�������Ƿ�֧������
     return obj.innertext=value
     return obj.textContent=value

  */
  function getContent(obj,value){
    if(value){
    if(obj.innerText){
      obj.innerText=value;
    }else{
      obj.textContent=value;
    }
  }else{
      if(obj.innerText){
        return obj.innerText;
      }else{
        return obj.textContent;
      }
    }
  }


/*
getStyle(obj,attr)
1���ж�������Ƿ�֧������
2����������ֵ
*/
function getStyle(obj,attr){
  if(window.getComputedStyle){
    return getComputedStyle(obj,null)[attr];
  }else{
    return obj.currentStyle[attr];
  }
}


/*
getChilds(obj)   ��ȡָ���������Ԫ�ؼ���
obj ָ���Ķ���
type ָ����ȡ��Ԫ�ص�����
     true  Ԫ�ؽڵ�
     false Ԫ�ؽڵ����������ı�
1����ȡ��Ԫ��
2���ڵ�����  1
*/
function getChilds(obj,type){
  type=type===undefined?true:type;
  var arr=[];
  var childs=obj.childNodes;  
  if(type){
  for(var i=0;i<childs.length;i++){
    if(childs[i].nodeType==1){
      arr.push(childs[i]);
    }
  }
}else{
  for(var i=0;i<childs.length;i++){
    if(childs[i].nodeType==1||(child[i].nodeType==3&&childs[i].nodeValue.replace(/^\s*|\s*$/g,""))){
      arr.push(childs[i]);
  }
}
}
return arr
}

 // ��ȡ��һ��Ԫ��
         function firstChild(obj){
            return getChilds(obj)[0];
         }

// ��ȡ���һ��Ԫ��
         function lastChild(obj){
          var a=getChilds(obj)
          return getChilds(obj)[a.length-1];
          
         }

// �����ȡԪ��
         function randomChild(obj,i){
          return getChilds(obj)[i];
         }

// ����һ��Ԫ�ز���
/*getNext(obj) ��ȡobj��Ԫ�ؽڵ�
1���Ȼ�ȡ��һ���ֵܽڵ�next
2��û��   false
   ��     �ж��ֵܽڵ� nodeType��=1
          next=next.nextSibling
          next==null  false
          �ظ�  ����2
          nodeType==1
          ����next
*/
         function getNext(obj){
          var next=obj.nextSibling;
          if(next==null){ 
            return next=false;
          }
          while(next.nodeType==3||next.nodeType==8){            
            next=next.nextSibling;
            if(next==null){
              return false;
            }
          }
          return next;
         }


/*
  insertAfter(newobj,obj,type)
  ��newobj�嵽obj����
  newobj  Ҫ�����Ԫ��
  obj     Ҫ�����λ��
  type    ����
          true  Ԫ�ؽڵ�
          false Ԫ�ؽڵ����������ı�
  1����ȡ��һ���ֵ�Ԫ��next
  2����ȡobj�ĸ�Ԫ��parent
  3��next  false
     parent.appendChild(newobj)
  4��parent.insertBefore(newobj,next)

*/
function insertAfter(newobj,obj,type){
  var next=getNext(obj,type);
  var parent=obj.parentNode;
  if(next){
    parent.insertBefore(newobj,next);
  }else{
    parent.appendChild(newobj);
  }
}



function getPrevious(obj){
          var previous=obj.previousSibling;
          if(previous==null){ 
            return next=false;
          }
          while(previous.nodeType==3||previous.nodeType==8){            
            previous=previous.previousSibling;
            if(previous==null){
              return false;
            }
          }
          return previous;
         }