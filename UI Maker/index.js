 
let Product_For_Shopping = []

const Product_List = () =>
{
    document.getElementById("Pro-Detail").innerHTML =""

    for(let i=0;i <Product_For_Shopping.length;i++)
    {
        let Product_Title_Element = document.createElement("h1");
        Product_Title_Element.innerHTML = Product_For_Shopping[i].Product_Title;

        let Product_Img_Element = document.createElement("img");
        Product_Img_Element.src = Product_For_Shopping[i].Product_Img;    

        let Product_Price_Element = document.createElement("h5");
        Product_Price_Element.innerHTML = Product_For_Shopping[i].Product_Price;


        let Delete_Button = document.createElement("button");
        Delete_Button.innerHTML="Delete";
        
        Delete_Button.addEventListener("click",()=>
        {
            Product_For_Shopping.splice(i,1);
            Product_List()
        })

        let Div = document.createElement("div");
        Div.append(Product_Title_Element,Product_Img_Element,Product_Price_Element,Delete_Button); 
        document.getElementById("Pro-Detail").append(Div);
        Product_Title_Element.setAttribute("class","title");
        Product_Price_Element.setAttribute("class","price");
        Delete_Button.setAttribute("class","delete")
       
    }
}


const AdminData =(e) =>
{
    e.preventDefault();

    let Product_Title = document.getElementById("Title").value;
    let Product_Img = document.getElementById("Image").value;
    let Product_Price = document.getElementById("Price").value;

    if(Product_Title.length<2)
    {   
        alert("Plese Enter Minimum Two Character Or More");
        return
    }

    if(Product_Price<0)
    {
        alert("Not Allow Negetive Price");
        return
    }



    let Product_Object = {
        Product_Title : Product_Title,
        Product_Img : Product_Img,
        Product_Price : Product_Price,

    };
    Product_For_Shopping.push(Product_Object);

    Product_List();
}


document.getElementById("Admin").addEventListener("submit",AdminData);