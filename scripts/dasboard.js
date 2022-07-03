class Booking{
    constructor(id, type, food, checkin, duration, amount){
        this.id = id;
        this.type = type;
        this.food = food;
        this.checkin = checkin;
        this.duration = duration;
        this.amount = amount;
    }
}


class UI{
    static displayBookings(){
        const Bookings = [
            {id: '#1', type: 'dog suite', food: 'Kibble', checkin : '15/6/22', duration: '2 days', amount: '$123' },
            {id: '#2', type: 'cat suite', food: 'Deli meats', checkin : '7/6/22', duration: '18 days', amount: '$923' }
        ];


        const books = Bookings;

        books.forEach((book)=> UI.addBookToList(book));
    }

    static addBookToList(book){
        const list = document.querySelector('#bookingList');
        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.id}</td>
        <td>${book.type}</td>
            <td>${book.food}</td>
            <td>${book.checkin}</td>
            <td>${book.duration}</td>
            <td>${book.amount}</td>
            <td><span class="btn update"> <i class="fa fa-edit" aria-hidden="true"></i></span></td>
            <td><span class="btn delete"> x </span></td>
        `;

        list.append(row);
    }

    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove()
        }
    }

    static updateBook(el){
        if(el.classList.contains('update')){
            // event.preventDefault();
            window.location.href="booking.html"; 
        }
    }
}


document.addEventListener('DOMContentLoaded', UI.displayBookings);


// delete

document.querySelector('#bookingList').addEventListener('click', (e)=>{
    if(e.target.classList.contains('delete')){
    alert("Do you confirm the booking cancellation?");
    UI.deleteBook(e.target);
    };
})

document.querySelector('#bookingList').addEventListener('click', (e)=>{
    if(e.target.classList.contains('update')){
        alert("Do you want to continue the update booking?");
        UI.updateBook(e.target);
    };
})

