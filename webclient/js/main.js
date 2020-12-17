(async ()=>{

    const message = document.querySelector("#message");
    const error_details = document.querySelector("#error_details");
    const load_btn = document.querySelector("#load_btn");

    load_btn.addEventListener("click",()=>{
        load_todos();
    });


    const load_todos = async ()=>{
        const collection = document.querySelector(".collection");
        message.classList.add("hide");
        load_btn.classList.add("hide");

        const url = 'http://localhost:3000/todos';
        //const url = 'http://localhost:3000/wrong_url';//wrong url for testing error handling
        
        fetch(url)
        .then(result=>{
            console.log(result);

            if(result.status===200){
                return result.json();
            }else{
                const details = `${result.status} : ${result.statusText}`;
                error_details.innerHTML = details;
                throw new Error(details);
            }

        }).
        then(data=>{

            data.forEach(todo => {
                const link = document.createElement('a');
 
                link.title = todo.content || todo.title;
                link.href=`/todos/${todo.id}`;
                link.text = todo.title || '-';
                link.classList.add('collection-item');
 
                if(todo.done){
                    link.classList.add("green");
                    link.classList.add("white-text");
                    link.style.textDecoration = 'line-through';
                } 
 
                collection.append(link);
            });

        })
        .catch(error=>{
            console.error(error);
            load_btn.classList.remove("hide");
            message.classList.remove("hide");
        });
    }

})();