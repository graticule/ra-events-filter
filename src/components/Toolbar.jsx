/* eslint-disable react/prop-types */
export default function Toolbar( props ) {
  const {filters = [], selected, onSelectFilter} = props;
  return (
    <div className="toolbar">
      { filters.map((filter, i) => {
        return (
        <button 
        className={`toolbar__button ${ filter === selected ? "active" : "" }`} 
        key={i} 
            onClick={() => onSelectFilter(filter)}>
          {filter}
        </button>);
      }) }
    </div>
  )
}
