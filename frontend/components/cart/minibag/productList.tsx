// import urlFor from 'lib/image';
import MiniBagItem from "./minibagItem";

const ProductList = ({lineItems}) => {
  const needProductSlider = lineItems.length > 2

  return (
    <div className="u-flex-column u-mar-v-sm">
      {/* Arrow Up */}
      {needProductSlider && <button>Up</button> }
      {/* Product List */}
      <div>
        {lineItems.map((lineItem, key) => <MiniBagItem {...lineItem} key={key} />)}
      </div>
      {/* Arrow Down */}
      {needProductSlider && <button>Down</button>}
    </div>
  )
};
  
export default ProductList;