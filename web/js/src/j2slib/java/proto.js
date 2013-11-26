/* 
 * This class adds all the required prototypes from core.z
 */

    String.prototype.equalsIgnoreCase=function(anotherString){
        return(anotherString==null)?false:(this==anotherString
            ||this.toLowerCase()==anotherString.toLowerCase());
    };
    String.prototype.equals=function(anObject){
        return this.valueOf()==anObject;
    };
    String.prototype.startsWith=function(prefix){
        if(arguments.length==1){
            return this.startsWith_string_number(arguments[0],0);
        }else if(arguments.length==2){
            return this.startsWith_string_number(arguments[0],arguments[1]);
        }else{
            return false;
        }
    };
    String.prototype.endsWith=function(suffix){
        return this.startsWith(suffix,this.length-suffix.length);
    };
    String.prototype.toCharArray=function(){
        var result=new Array(this.length);
        for(var i=0;i<this.length;i++){
            result[i]=this.charAt(i);
        }
        return result;
    };
    String.prototype.$lastIndexOf=String.prototype.lastIndexOf;
    String.prototype.lastIndexOf=function(s,last){
        if(last!=null&&last+this.length<=0){
            return-1;
        }
        if(last!=null){
            return this.$lastIndexOf(s,last);
        }else{
            return this.$lastIndexOf(s);
        }
    };
    String.indexOf=function(source,sourceOffset,sourceCount,
        target,targetOffset,targetCount,fromIndex){
        if(fromIndex>=sourceCount){
            return(targetCount==0?sourceCount:-1);
        }
        if(fromIndex<0){
            fromIndex=0;
        }
        if(targetCount==0){
            return fromIndex;
        }

        var first=target[targetOffset];
        var i=sourceOffset+fromIndex;
        var max=sourceOffset+(sourceCount-targetCount);

            startSearchForFirstChar:
            while(true){

                while(i<=max&&source[i]!=first){
                    i++;
                }
                if(i>max){
                    return-1;
                }


                var j=i+1;
                var end=j+targetCount-1;
                var k=targetOffset+1;
                while(j<end){
                    if(source[j++]!=target[k++]){
                        i++;

                        continue startSearchForFirstChar;
                    }
                }
                return i-sourceOffset;
            }
    };
    String.prototype.isEmpty = function(){
        if(this.length==0)return true;
        else return false;
    };
    String.prototype.contains = function(exp)
    {
        if(this.match(exp) != null)
            return true;
        else
            return false;
    };
    Boolean.prototype.booleanValue=function(){   
        return this.valueOf();
    };

    String.prototype.startsWith_string_number=function(prefix,toffset){
        var to=toffset;
        var po=0;
        var pc=prefix.length;

        if((toffset<0)||(toffset>this.length-pc)){
            return false;
        }
        while(--pc>=0){
            if(this.charAt(to++)!=prefix.charAt(po++)){
                return false;
            }
        }
        return true;
    };
    String.prototype.startsWith=function(prefix){
        if(arguments.length==1){
            return this.startsWith_string_number(arguments[0],0);
        }else if(arguments.length==2){
            return this.startsWith_string_number(arguments[0],arguments[1]);
        }else{
            return false;
        }
    };
    String.prototype.matches=function(exp){
        if(exp!=null){
            exp="^("+exp+")$";
        }
        var regExp=new RegExp(exp,"gm");
        var m=this.match(regExp);
        return m!=null&&m.length!=0;
    };
    String.prototype.$plit=function(regex,limit){

        if(limit!=null&&limit>0){
            if(limit==1){
                return this;
            }
            var regExp=new RegExp("("+regex+")","gm");
            var count=1;
            var s=this.replace(regExp,function($0,$1){
                count++;
                if(count==limit){
                    return"@@_@@";
                }else if(count>limit){
                    return $0;
                }else{
                    return $0;
                }
            });
            regExp=new RegExp(regex,"gm");
            var arr=this.split(regExp);
            if(arr.length>limit){
                arr[limit-1]=s.substring(s.indexOf("@@_@@")+5);
                arr.length=limit;
            }
            return arr;
        }else{
            var regExp=new RegExp(regex,"gm");
            return this.split(regExp);
        }
    };
//    String.prototype.valueOf=function(o){        
//        if(o=="undefined"){
//            return String.value0f();
//        }
//        if(o instanceof Array){
//            if(arguments.length==1){
//                return o.join('');
//            }else{
//                var off=arguments[1];
//                var len=arguments[2];
//                var oo=new Array(len);
//                for(var i=0;i<len;i++){
//                    oo[i]=o[off+i];
//                }
//                return oo.join('');
//            }
//        }
//        return""+o;
//    };
//    String.prototype.valueOf=function(o)
//    {
//        alert(o);
//        return o;
//    };
String.prototype.doubleValue=function()
{
    return this.valueOf();
};
Math.toRadians=function(v)
{
    return v*Math.PI/180.0;
};