import { useEffect } from 'react';
import { Box, Button, Input, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Payment = () => {
  const router = useRouter();
  const { reference } = router.query;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      console.log('Paystack script loaded');
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const payWithPaystack = (e) => {
    e.preventDefault();
    if (typeof PaystackPop === 'undefined') {
      alert('Paystack script not loaded yet');
      return;
    }
    let handler = PaystackPop.setup({
      key: 'pk_test_00ae6bc43be3dffdd1106c596e61cc04be58bee2', // Replace with your Paystack public key
      email: document.getElementById('email-address').value,
      amount: document.getElementById('amount').value * 100, // Amount in kobo
      firstname: document.getElementById('first-name').value,
      currency: "GHS",
      lastname: document.getElementById('last-name').value,
      reference: document.getElementById('reference').value,
      onClose: function() {
        alert('Window closed.');
      },
      callback: function(response) {
        alert('Payment successful. Transaction reference: ' + response.reference);
      }
    });
    handler.openIframe();
  };

  return (
    <Box width="400px" margin="0 auto" mt="50px" p="20px" boxShadow="md" borderRadius="md" bg="white">
      <Text fontSize="2xl" fontWeight="bold" mb="10px" textAlign="center" color="teal.500">Payment Form</Text>
      <form id="paymentForm" onSubmit={payWithPaystack}>
        <VStack spacing={5}>
          <Box className="form-group">
            <Text as="label" htmlFor="email-address" fontWeight="bold" mb="2">Email Address</Text>
            <Input type="email" id="email-address" required borderColor="teal.500" _hover={{ borderColor: 'teal.300' }} />
          </Box>
          <Box className="form-group">
            <Text as="label" htmlFor="amount" fontWeight="bold" mb="2">Amount</Text>
            <Input type="tel" id="amount" required borderColor="teal.500" _hover={{ borderColor: 'teal.300' }} />
          </Box>
          <Box className="form-group">
            <Text as="label" htmlFor="first-name" fontWeight="bold" mb="2">First Name</Text>
            <Input type="text" id="first-name" borderColor="teal.500" _hover={{ borderColor: 'teal.300' }} />
          </Box>
          <Box className="form-group">
            <Text as="label" htmlFor="last-name" fontWeight="bold" mb="2">Last Name</Text>
            <Input type="text" id="last-name" borderColor="teal.500" _hover={{ borderColor: 'teal.300' }} />
          </Box>
          <Box className="form-group">
            <Text as="label" htmlFor="reference" fontWeight="bold" mb="2">Reference</Text>
            <Input type="text" id="reference" defaultValue={reference || ''} readOnly borderColor="teal.500" _hover={{ borderColor: 'teal.300' }} />
          </Box>
          <Box className="form-submit">
            <Button type="submit" bg="teal.500" color="white" _hover={{ bg: "teal.400" }}>Pay</Button>
          </Box>
        </VStack>
      </form>
    </Box>
  );
};

export default Payment;
