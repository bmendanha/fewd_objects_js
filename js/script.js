var hotel = {
    // Object properties
    name: 'Mendanha',
    rooms: 110,
    booked: 25,
    gym: true,
    sauna: true,
    massage: true,
    roomTypes: ['double', 'twin', 'suite', 'king'],
    checkAvailablity: function() {
        return this.rooms - this.booked;
    }
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailablity();

// Define a constructor function template for hotels
function Hotel(name, rooms, booked, gym, sauna, massage) {
    // Object properties
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.gym = gym;
    this.sauna= sauna,
    this.massage= massage,
    this.checkAvailablity = function() {
        return this.rooms - this.booked;
    };
}

// Define to instances of the hotel and their arguments
var mendanhaspa = new Hotel('Mendanha', 110, 25, true, true, true);
var lemonHotel = new Hotel('Lemon', 56, 15, false);

// Declare a variable to hold the name of the hotel and room availability 
var details1 = mendanhaspa.name + ' rooms: ';
    // add content to an existing variable----
    details1 += mendanhaspa.checkAvailablity();
var details1_gym = 'Gym: ' + mendanhaspa.gym;
var details1_sauna = 'Sauna: ' + mendanhaspa.sauna;
var details1_massage = 'Massage: ' + mendanhaspa.massage;
var details1_rooms = 'Total rooms: ' + mendanhaspa.rooms

// Get the hotel1 div
var elHotel1 = document.getElementById('hotel1');
var elHotel1_gym = document.getElementById('hotel1_gym');
var elHotel1_sauna = document.getElementById('hotel1_sauna');
var elHotel1_massage = document.getElementById('hotel1_massage');
var elHotel1_rooms = document.getElementById('hotel1_rooms');
// Add the variables created onto the empty div
elHotel1.textContent = details1;
elHotel1_gym.textContent = details1_gym;
elHotel1_sauna.textContent = details1_sauna;
elHotel1_massage.textContent = details1_massage;

elHotel1_roms.textContent = details1_rooms;

//var details2 = lemonHotel.name + ' rooms: ';
 //   details2 += lemonHotel.checkAvailablity();
//var elHotel2 = document.getElementById('hotel2');
//elHotel2.textContent = details2;


