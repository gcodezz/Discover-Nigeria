export interface Place {
  id: string
  name: string
  image: string
  details: string
  map: string
}

export interface PlaceItem {
  item: Place
}

export const places: Place[] = [
  {
    id: '1',
    name: 'Agbokim Waterfalls',
    image: 'https://ibiene.com/wp-content/uploads/2020/12/Agbokim-waterfalls-3.jpg',
    map: 'https://www.google.com/maps/place/Agbokim+waterfalls/@5.9041061,8.9094182,20z/data=!4m12!1m6!3m5!1s0x105c39bb0fbd5e79:0x188295729a389b2f!2sAgbokim+waterfalls!8m2!3d5.9028194!4d8.9110718!3m4!1s0x105c39bb0fbd5e79:0x188295729a389b2f!8m2!3d5.9028194!4d8.9110718',
    details: `The waterfall is nature’s laughter. 
        The earth is filled with some of the most amazing scenes if only more people could see it. Beyond the noise of the city, bustling commercial streets, fumes from automobiles and blasts from loud speakers, there are places that you step into and you feel as one with mother earth. One of those places is the waterfall.
        Follow Ibiene on a journey to Agokim Waterfalls in Cross River State (South-South), Nigeria.
        The waterfall is made up of seven streams, which falls wildly over steep cliffs, providing seven-faced falls. Agbokim Waterfalls sits on the cross river and descends in (what some claim is) the middle of the tropical rainforest. The rainforest is picturesque with lush and green scenery.`
  },
  {
    id: '2',
    name: 'Agodi Gardens',
    image: 'https://oldnaija.files.wordpress.com/2015/11/agodi2.jpg',
    map: 'https://www.google.com/maps/place/Dache+foods/@7.4063528,3.8988253,16.74z/data=!4m5!3m4!1s0x10398d5961e8b01d:0xe86927f0592539e0!8m2!3d7.4067835!4d3.9008784',
    details: `Located in the heart of Ibadan, at the foot of Old Mokola Hill is Agodi Gardens which stands out in the city of brown roofs. It would interest you to note that Agodi Gardens was originally created in 1967 and managed by the Western region then. It was formerly called Agodi Zoological and Botanical Gardens and was a top notch recreational centre. However, the infamous Ogunpa flood disaster in Ibadan, which happened in 1980 destroyed the garden; the flood swept away most of the animals and left the place in a deplorable state. Thankfully in 2012, the government decided to renovate it and in 2014 the new Agodi Gardens was re-opened.
        Agodi Gardens has a lot of nice features including a water park, children’s play area, rides, picnic spots, restaurant area, a lake and a mini zoo. It is very serene, lush and green; perfect for photo shoots, pre-wedding shoots, picnics, garden parties, outdoor events, concerts and even weddings. Every visit to Agodi Gardens is enchanting due to the sheer beauty and serenity of the place.`
  }
]
