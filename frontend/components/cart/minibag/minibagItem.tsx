import urlFor from 'lib/image';

const MiniBagItem = ({productTitle, defaultImage, lineitem}) => {

  return (
    <div className="u-dis-flex u-mar-v-sm col-12">
      <img src={urlFor(defaultImage).height(100).width(70).auto('format').url()} width="70" height="100" className="col-4"/>
      <div className="u-pad-h-sm">
        <p>{productTitle}</p>
        <p>{lineitem.title}</p>
        <p>£{lineitem.price}</p>
      </div>
    </div>
  )
};
  
export default MiniBagItem;