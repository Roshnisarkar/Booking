
let fetchData= async()=>{
        let url='http://localhost:3000/movie'
    
        let res= await fetch(url,{method:"GET"})
    
        let data= await res.json()
    
        // console.log(data)
        pegidata(data)
}

let searchhh= async()=>{
        let sear =document.querySelector("#onsear").value.toLowerCase()
        let url='http://localhost:3000/movie'
        
        let res=await fetch(url,{method:"GET"})
    
        let data=await res.json()
        let filterData=data.filter((e)=>{
                return e.name.toLowerCase().includes(sear) 

        })
        pegidata(filterData)
}
let serching=(data)=>{
        let a=document.querySelector("#dat")
        a.innerHTML=""
       data.map((e)=>{
       a.innerHTML+=(`
               <tr>
                <td>${e.name}</td>
                 <td> ${e.date}</td>
                 <td>${e.number}</td>
                  <td>${e.person}</td>
                   <td>${e.price}</td>
                    <td>${e.price*e.person}</td>
                     <td onclick="confirmdelete('${e.id}')">Cancle</td>
                     <td onclick="formfill('${e.id}')">Update</td>
                 
                 </tr>
               `)  
                 
       })
    
    }



    let confirmdelete=(id)=>{
            Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                  }).then((result) => {
                    if (result.isConfirmed) {
                            del(id)
                      Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                    }
                  });
    }
    let del=(id)=>{
            let url=`http://localhost:3000/movie/${id}`
    
            fetch(url,{method:"DELETE"})
    }
    
    let ins=()=>{
            let inpname=document.querySelector("#name").value
            let inpage=document.querySelector("#email").value
            let inpdate=document.querySelector("#date").value
            let inpnumber=document.querySelector("#number").value
            // let inpselectmovie=document.querySelector("#selectmovie").value
            let inpperson=document.querySelector("#person").value
    
            let url='http://localhost:3000/movie'
    
    
            fetch(url,{
    
                    method:"POST",
                    headers:{
                            "Content-type":"application/json"
                    },
                    body:JSON.stringify(
                            {
                            "name":inpname,
                            "date":inpdate,
                            "number":inpnumber,
                            "person":inpperson,
                            "price":200
                            }
                    )
            })
            location.href="table.html";
    return false
    }
    
    let formfill=async(id)=>{
            let url=`http://localhost:3000/movie/${id}`
    
            let res=await fetch(url,{method:"GET"})
    
            let data=await res.json()
            console.log(data);
    
            let formData=`
            <div class="ccceee">
             <div class="ccceee2">
              Enter Your Name :  <input type="text" id="upname" placeholder="Enter Your Name" value=${data.name}><br><br>
              Select date : <input type="date" id="update" value=${data.date}><br><br>
           Enter Your Number : <input type="text"  id="upnumber"  placeholder="Enter Your Number" value=${data.number}><br><br>
           Enter Number of tickets : <input type="number" id="upperson" placeholder="Number of tickets" value=${data.person}><br><br>    
              <input type="submit" value="update" onclick="return finalupdate('${data.id}')" class="btnup">
    </div>
     </div>
            `
    
            document.querySelector("#formdata").innerHTML=formData
    }
    let finalupdate=(id)=>{
            let inpname=document.querySelector("#upname").value
            
            let inpdate=document.querySelector("#update").value
            let inpnumber=document.querySelector("#upnumber").value
           
            let inpperson=document.querySelector("#upperson").value
    
            let url=`http://localhost:3000/movie/${id}`
    
    
            fetch(url,{
    
                    method:"PUT",
                    headers:{
                            "Content-type":"application/json"
                    },
                    body:JSON.stringify(
                            {
                            "name":inpname,
                            "date":inpdate,
                            "number":inpnumber,
                            "person":inpperson,
                            "price":200
                            }
                    )
            })
           
    return false
    }


    let pegidata=(data)=>{
        $('#demmm').pagination({
    dataSource: data,
    pageSize: 5,
    showGoInput: true,
    showGoButton: true,
    callback: function(data, pagination) {
        serching(data)
    }
})
    }