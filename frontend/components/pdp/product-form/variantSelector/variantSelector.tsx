
import styles from 'stylesheets/components/product/productPage.module.scss'

const VariantsSelect = ({allVariants, currentVariant, setVariant}) => {

  return (
    <div className={styles.variantContainer}>
      {allVariants.map((variant, key) => 
      <label key={key} className={`${styles.variant} ${(currentVariant.title == variant.title) ? styles.checked : ''}`}>
        {variant.title} 
        <input className="u-hidden" name="variant" type="radio" checked={currentVariant.title === variant.title} value={variant.title} onChange={() => setVariant(variant)}/>
      </label> )}
    </div>
  )
}

const VariantSelector = ({allVariants, currentVariant, setVariant}) => {
  return (
    <div className="u-dis-block">
      <div className="u-dis-flex"> 
        <span>Select Size</span>
        <button className="col-4">Size Guide</button>
      </div>
      <VariantsSelect allVariants={allVariants} currentVariant={currentVariant} setVariant={setVariant}/>
    </div>
  )
}

export default VariantSelector