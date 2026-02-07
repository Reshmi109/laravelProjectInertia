import FrontLayout from '@/Layouts/FrontLayout'
import React from 'react'
 import '../../assets/css/bootstrap.min.css'
  import '../../assets/css/style.css'
  import about from '../../assets/img/about.jpg'
  function handleSubmit(e){
    e.preventDefault();
    alert('Hello');
    postMessage(route("posts.store"));

  }





function ProductEntry() {
  return (
 <>
<FrontLayout>
 
   {/* Hero Start */}
<div className="container-fluid bg-primary py-5 mb-5 hero-header">
  <div className="container py-5">
    <div>
        <h1>Product Entry</h1>

      <form action="" >
        <input type="text" name='name' placeholder='Enter Product Name' value={data.name} />
        <input type="text" name='details' placeholder='Enter Product Details' value={data.details}/>
        <input type="text" name='sku' placeholder='Enter Product SKU' value={data.sku}/>
        <input type="number" name='stock' placeholder='Enter Prodcut Store' value={data.stock} />
        <button>Save</button>
      </form>


    </div>
  </div>
</div>
{/* Hero End */}


 





 </FrontLayout>
 
 
 
 </>
  )
}

export default Product