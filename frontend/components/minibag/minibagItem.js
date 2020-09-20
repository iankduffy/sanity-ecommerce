import urlFor from '../../lib/image';

const MiniBagItem = ({lineitem}) => {
  console.log({lineitem})
  return (
    <div className="u-dis-flex u-mar-v-sm">
      <img src={urlFor(lineitem.defaultImage).height(100).width(90).auto('format').url()} />
      <div className="u-pad-h-sm">
        <p>{lineitem.productTitle}</p>
        <p>{lineitem.lineitem.title}</p>
        <p>£{lineitem.lineitem.price}</p>
      </div>
    </div>
  )
};
  
export default MiniBagItem;