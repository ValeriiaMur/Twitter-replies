"use client";

import { useState } from "react";
import { Box, Heading, Input, Text } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [query, setQuery] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleReply = async () => {
    const res = await fetch("/api/reply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });

    if (res.ok) {
      setMessage("Replies posted successfully!");
    } else {
      setMessage("Error posting replies.");
    }
  };

  return (
    <Box
      className="bg-gradient-to-br from-blue-500 to-purple-600 min-h-screen flex items-center justify-center"
      p={6}
    >
      <Box
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg"
        textAlign="center"
      >
        <Heading as="h1" size="xl" className="text-gray-800 font-bold mb-6">
          Twitter Reply Bot
        </Heading>
        <Text className="text-gray-600 mb-4">
          Enter a search query to find tweets and auto-generate replies!
        </Text>
        <Input
          placeholder="Enter search query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          size="lg"
          className="p-2 text-gray-900 border-gray-700 border"
        />
        <Button
          size="lg"
          width="full"
          background={"purple.500"}
          onClick={handleReply}
          disabled={!query}
          className="mt-4"
        >
          Reply to Tweets
        </Button>
        {message && (
          <Text
            mt={4}
            className={`${
              message.includes("successfully")
                ? "text-green-500"
                : "text-red-500"
            } font-semibold`}
          >
            {message}
          </Text>
        )}
      </Box>
    </Box>
  );
}
