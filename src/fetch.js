
    
    export async function getBooks(userinput, whatPage=1){
        let url = `https://api.itbook.store/1.0/search/${userinput}/${whatPage}`
        try{
            let response = await fetch(url);
            return await response.json()/*.then((data) =>console.log(data)); */
        }catch (error){
            console.log(error,'color: orange; font-weight: bold;');
        }
    }

    function structure(book) {
        return(
        `<div class ="item" id="${book.isbn13}">
            <p>
                <img src="${book.image}" alt="${book.title}" class="imageIsbnTrigger"/>
            </p>
        <div class="title">
            <h1>
                Ime knjige: ${book.title}
            </h1>

            <p>
                Podnaslov: ${book.subtitle}
            </p>

            <p class="ISBN">
                ISBN:${book.isbn13}
            </p>

            <p>
                Cijena:${book.price}
            </p>

        </div>
        <div class="extra hidden"></div>
    </div>`);
    }

    //  async function getExtra(id){
    //     let url = `https://api.itbook.store/1.0/books/${id}`
    //     try{
    //         let response = await fetch(url);
    //         return await response.json()/*.then((data) =>console.log(data)); */
    //     }catch (error){
    //         console.log(error,'color: orange; font-weight: bold;');
    //     }
    //}
 /*    async function  renderBooks(userinput, whatPage=1)
    {
        let response = await getBooks(userinput, whatPage);
        let books = await response.books; //it's an array (of books)
        let html = '';
        
        await books.forEach(book => 
            {
                let htmlSegment = structure(book);
                html += htmlSegment;
            });
        document.querySelector("#api").innerHTML = html;
        checkPage();
        assignEventToImage();
        showExtra();
        } */

/*      async function renderExtra(id){
        let response = await getExtra(id);
        let author = response.authors;
        let description = response.desc;
        let publisher = response.publisher;

        let html = `
        <p>
        author:${response['authors']}
        </p>
        <p>
        publisher:${response['publisher']}
        </p>
        <p id="description">
        description:${response['desc']}
        </p>
        `
        document.getElementById(`${id}`).children[2].innerHTML = html;

    }
  */
     

