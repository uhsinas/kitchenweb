import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  //fooddetails
  foodDetails = [
    {
      id: 1,
      foodName: "Paneer Grilled Sandwich",
      foodDetails: "pan-fried masala paneer.",
      foodPrice: "200",
      foodImg: "https://recipes.timesofindia.com/photo/60043279.cms"
    },
    {
      id: 2,
      foodName: "Chicken Biriyani",
      foodDetails: "This magnificent dish is omnipresent in India and different regions have modified it to suit their local taste pallet.",
      foodPrice: "180",
      foodImg: "https://www.prameyanews.com/wp-content/uploads/2020/07/authentic-chicken-biryani-50434132-1066x600.jpg"
    },

    {
      id: 3,
      foodName: "Paneer Burger",
      foodDetails: "panner.",
      foodPrice: "149",
      foodImg: "https://media.news24online.com/static_dev/static_root/media/2020/10/28/174b3ead-2b21-49f6-b1a9-a31d55e0b975.jpg"
    },
    {
      id: 4,
      foodName: "Cheesy Pepperoni Pizza",
      foodDetails: "These cheesy pepperoni pizza crescent sticks are a great snack or appetizer to serve, as they are sure to please!",
      foodPrice: "150",
      foodImg: "https://www.dealsshutter.com/blog/wp-content/uploads/2020/01/pizza-1024x640.jpg"
    },
    {
      id: 5,
      foodName: "Indulgence Brownie",
      foodDetails: "(Eggless) Indulge in richly decadent Indulgence brownie crafted with love & topped with bittersweet chocolate that provides ultra-rich chocolate experience.",
      foodPrice: "105",
      foodImg: "https://th.bing.com/th/id/R.ed7cb608d876975f913c010501f0204c?rik=aYfemOKZqBXPog&riu=http%3a%2f%2f2.bp.blogspot.com%2f-4-EaQ8iOcX4%2fUg12pDwke_I%2fAAAAAAAADK8%2fMa_p418pjOw%2fs1600%2fmoist%2bchocolate%2bcake.jpg&ehk=hkv3IQWB5p8510TYyfdz2VetJzdHlcqH2W48JjCT%2fKI%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      id: 6,
      foodName: "Oreo Cheesecake Ice Cream ",
      foodDetails: "Oreo Ice Cream.",
      foodPrice: "90",
      foodImg: "https://i.pinimg.com/originals/df/df/5d/dfdf5d51d4062fd2d04d34c239bbf1f1.jpg"
    }
  ]








}
