var obj = new XMLHttpRequest();
        obj.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                jobj = JSON.parse(this.responseText);
                /* document.body.innerHTML=jobj;*/
                var nav = document.createElement("nav")
                var ul = document.createElement("ul");
                ul.setAttribute("class", "pagination")
                var limit = jobj.length / 5;
                for (i = 1; i <= limit; i++) {
                    var li = document.createElement("li");
                    li.setAttribute("class", "page-item")
                    var a = document.createElement("a");
                    a.setAttribute("class", "page-link");
                    a.setAttribute("onclick","myfun("+i+")");
                    a.innerText=i;
                    li.appendChild(a);
                    ul.appendChild(li);
                    nav.appendChild(ul)
                }
                document.getElementById("container").appendChild(nav);

            }
        }
        obj.open("GET", "https://5cdd0a92b22718001417c19d.mockapi.io/api/users", true);
        obj.send();

        
        function myfun(b){ 
            var start=(b*5)-5; 
            var end= start+5;
            document.getElementById("tbd").innerHTML="";
            for(j=start;j<end;j++){
                var tr=document.createElement("tr");
                let count=0;
                for(k in jobj[j]){
                    count++;
                    if(count>5){
                        break;
                    }
                    var td=document.createElement("td");
                    td.innerHTML=jobj[j][k];
                    tr.appendChild(td);
                }
                document.getElementById("tbd").appendChild(tr);
            }

        }