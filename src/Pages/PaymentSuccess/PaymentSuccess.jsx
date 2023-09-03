import { useParams } from "react-router-dom";

const PaymentSuccess = () => {
    
    const transactionId = useParams()
    console.log(transactionId);
    return (
        <div className="h-screen flex flex-col items-center justify-center">
           <p className="text-4xl ">Payment Successful</p>
            <p>Transaction id: {transactionId.id}</p>
        </div>
    );
};

export default PaymentSuccess;