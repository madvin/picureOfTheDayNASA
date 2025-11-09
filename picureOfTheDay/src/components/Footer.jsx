export default function Footer(props) {
  const { showModal, handlToggleModal } = props;
  return (
    <footer>
      <div className="bgGradient">
        
      </div>
      <div>
        <h2>The picture of the day</h2>
        <p>by NASA</p>
        <div>
          <button onClick={handlToggleModal}>
            <i className='fa-solid fa circle-info'></i>
          </button>
        </div>
      </div>
    </footer>
  );
}