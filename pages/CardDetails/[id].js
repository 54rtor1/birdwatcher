import { useRouter } from 'next/router';

const CardDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Card Details</h1>
      <p>Card ID: {id}</p>
      {/* Render the details of the card */}
    </div>
  );
};

export default CardDetails;
