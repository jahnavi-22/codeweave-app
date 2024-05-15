import { Box, Button } from "@chakra-ui/react";
import { executeCode } from "../API";
import { useState } from "react";

const Output = ({ sourceCode, language }) => {
  const [output, setOutput] = useState("");
  const [isError, setIsError] = useState(false);


  const runCode = async () => {
      if (!language) {
        console.log("language is undefined");
        return;
      }
      if (!sourceCode) {
        console.log("sourceCode is empty");
        return;
      }
      console.log("language:", language);
      console.log("sourceCode:", sourceCode);
      try {
        const { run: result } = await executeCode(language, sourceCode);
      //   console.log("data:", run:result);
        // setOutput(result.output);
        setOutput(result.output.split("\n"));
        result.stderr ? setIsError(true) : setIsError(false);
      } catch (error) {
        console.log("error:", error);
      }
    };
 
  return (
    <Box w="100%">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#0c1522",width: "100%", paddingBottom: "7px"}}>
        <Button> Output: </Button>
        <Button colorScheme="green" onClick={runCode}>Run Code</Button>
      </div>
      <Box height="13vh" width="177vh" border="1px solid" borderRadius={4} borderColor="#333" padding={3} color={isError ? "red" : "white"}>
        {output ? output : 'Click "Run Code" to see the output'}
      </Box>
    </Box>
  );
};

export default Output;