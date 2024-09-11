import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="homePage">
      <h2>מערכת הלוואות</h2>
      <div className="homePageButtons">
        <div className='homePageButton'
          onClick={() => {
            navigate('/newLoan');
          }}
        >
          הלוואה חדשה
        </div>
        <button className='homePageButton'
          onClick={() => {
            navigate('/findLoan');
          }}
        >
          חפש הלוואה
        </button>
        <button className='homePageButton'
          onClick={() => {
            navigate('/findBorrower');
          }}
        >
          חפש לווה
        </button>
        <button className='homePageButton'
          onClick={() => {
            navigate('/closeLoan');
          }}
        >
          סגירת הלוואה
        </button>
      </div>
    </div>
  );
};

export default Home;
