// const api = 'https://api.freeapi.app/api/v1/public/books'

// async function getdata() {
 
//     try {
//         const res = await fetch(api)
//         if (!res.ok) {
//             throw new Error("respose was not done yete");
//         }
//        const json = await res.json()
//         const data = json.data.data.forEach((element) => {
//             const data = element.volumeInfo
//             console.log('Title :',data.title)
//             console.log('Author :',data.authors[1])
//             console.log('Publisher :',data.publisher)
//             console.log('Published Date :',data.publishedDate)
//             console.log('Thumnail :',data.imageLinks.thumbnail)
//         });
        
//         console.log(data)
//     } catch (error) {
//         console.log("error" +error)
//     }
    
 
// }

// getdata()


// async function getData() {
//     const url = "https://api.freeapi.app/api/v1/public/books";
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`Response status: ${response.status}`);
//       }
  
//       const json = await response.json();
//       console.log(json);
//     } catch (error) {
//       console.error(error.message);
//     }
//   }

//   getData()
 
const img = document.querySelector(".card-img-top")
const Booktitle = document.querySelector(".card-title")
const publisherDate = document.querySelector(".card-text")
const author = document.querySelector(".btn")
const publisher = document.querySelector(".publisher")
const api = 'https://api.freeapi.app/api/v1/public/books';

async function getData() {
  try {
    const response = await fetch(api);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    
    const json = await response.json();
    const books = json.data.data; // Adjust based on actual API response structure
    
    // Process each book safely
    const processedData = books.map((book) => {
      const volumeInfo = book.volumeInfo || {};
      return {
        title: volumeInfo.title || "No title",
        author: (volumeInfo.authors?.[0] || "Unknown author"), // Use first author
        publisher: volumeInfo.publisher || "No publisher",
        publishedDate: volumeInfo.publishedDate || "N/A",
        thumbnail: volumeInfo.imageLinks?.thumbnail || "default-thumbnail.jpg"
      };
    });

    // console.log("Processed Books:", processedData);
    // return processedData;
    processedData.forEach(element => {
        console.log(element)
        Booktitle.innerHTML = `Title : ${element.title}` 
        img.src = element.thumbnail
        publisherDate.innerHTML = `Date ${element.publishedDate}`
        author.innerHTML = `Author : ${element.author}`
        publisher.innerHTML = element.publisher

    });
    // console.log(processedData.thumbnail);
    
    // img.src = 
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

// Call the function
getData();