let  employees=[{Id:101, Name:'Suhel', Email:'suhelpakhali30@gmail.com'},
{Id:101, Name:'Sanket', Email:'suhelpakhali30@gmail.com'},
{Id:101, Name:'Rutwik', Email:'suhelpakhali30@gmail.com'},
{Id:101, Name:'Nitin', Email:'suhelpakhali30@gmail.com'}
]

function display_data(){
    let row = ""
    for(emp of employees){
        row=row +`<tr> <td> ${emp.Id} </td>
                        <td>${emp.Name}</td>
                        <td>${emp.Email}</td>`
    }
    document.getElementById('rajni').innerHTML=row
}