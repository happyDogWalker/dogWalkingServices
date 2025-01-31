const galleryData = [
   
  ];


  class dogGalleryImage {
    constructor(title, img, description){
        this.title = title;
        this.img = img;
        this.description = description;
    }
  }

galleryData.push(new dogGalleryImage('Bella', '../images/gallery/img1.jpeg', 'Bella in a pink jacket sitting on a chair.'));
galleryData.push(new dogGalleryImage('Bella & Bella', '../images/gallery/img2.jpeg', 'Romeo and Bella playing.'));
galleryData.push(new dogGalleryImage('Daisy', '../images/gallery/img3.jpeg', 'Daisy sleeping sound on couch.'));
galleryData.push(new dogGalleryImage('Bella', '../images/gallery/img4.jpeg', 'Bella on bed with two tenis balls.'));
galleryData.push(new dogGalleryImage('Bella', '../images/gallery/img5.jpeg', 'Bella posing on couch.'));
galleryData.push(new dogGalleryImage('Hendrix', '../images/gallery/img6.jpeg', 'Hendrix sitting on the ground at dog park.'));
galleryData.push(new dogGalleryImage('Princess', '../images/gallery/img7.jpeg', 'Princess standing on hardwood floor.'));
galleryData.push(new dogGalleryImage('Bella', '../images/gallery/img8.jpeg', 'Bella waiting patiently.'));
galleryData.push(new dogGalleryImage('Bella', '../images/gallery/img9.jpeg', 'Bella being playful with blanket.'));
galleryData.push(new dogGalleryImage('Romeo', '../images/gallery/img10.jpeg', 'Romeo waiting paitently.'));
galleryData.push(new dogGalleryImage('Daisy', '../images/gallery/img11.png', 'Daisy smiling upward on a sunny day.'));
galleryData.push(new dogGalleryImage('Bella, Romeo, Princess, Hendrix', '../images/gallery/img12.jpeg', 'Happy dog walker walking dogs.'));




  let currentIndex = 0;

  function updateGallery() {
    const { title, img, description } = galleryData[currentIndex];
    document.getElementById('gallery-title').innerText = title;
    document.getElementById('gallery-image').src = img;
    document.getElementById('gallery-description').innerText = description;
  }

  document.getElementById('next-button').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryData.length;
    updateGallery();
  });

  document.getElementById('prev-button').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
    updateGallery();
  });

  // Initial update
  updateGallery();