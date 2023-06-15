import { useRouter } from 'next/router';

const CardDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch the data for the specific card using the `id`

  return (
    <div>
      <h1>Card Details</h1>
      <p>Card ID: {id}</p>
      {/* Render the details of the card */}
    </div>
  );
};

export default CardDetails;
