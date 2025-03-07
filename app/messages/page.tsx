"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Send, Search, Image, Paperclip } from "lucide-react"

// Mock data for conversations
const mockConversations = [
  {
    id: 1,
    user: {
      id: 101,
      name: "Sarah Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      online: true,
    },
    lastMessage: {
      text: "Is the textbook still available?",
      time: "10:30 AM",
      isRead: false,
    },
    listing: {
      id: 201,
      title: "Calculus Textbook",
      price: 45,
    },
  },
  {
    id: 2,
    user: {
      id: 102,
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      online: false,
    },
    lastMessage: {
      text: "I can meet tomorrow at the library",
      time: "Yesterday",
      isRead: true,
    },
    listing: {
      id: 202,
      title: "MacBook Pro 2019",
      price: 800,
    },
  },
  {
    id: 3,
    user: {
      id: 103,
      name: "Emily Wong",
      avatar: "/placeholder.svg?height=40&width=40",
      online: false,
    },
    lastMessage: {
      text: "Would you take $100 for the desk?",
      time: "Yesterday",
      isRead: true,
    },
    listing: {
      id: 203,
      title: "Wooden Desk",
      price: 120,
    },
  },
  {
    id: 4,
    user: {
      id: 104,
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      online: true,
    },
    lastMessage: {
      text: "Thanks for the quick response!",
      time: "2 days ago",
      isRead: true,
    },
    listing: {
      id: 204,
      title: "Physics Textbook",
      price: 35,
    },
  },
]

// Mock data for messages in a conversation
const mockMessages = [
  {
    id: 1,
    senderId: 101, // Sarah
    text: "Hi there! I saw your listing for the Calculus textbook. Is it still available?",
    time: "10:15 AM",
  },
  {
    id: 2,
    senderId: "me",
    text: "Yes, it's still available! Are you interested?",
    time: "10:20 AM",
  },
  {
    id: 3,
    senderId: 101,
    text: "Great! I'm looking for this textbook for my MATH 101 class. What's the condition like? Any highlighting or notes?",
    time: "10:25 AM",
  },
  {
    id: 4,
    senderId: "me",
    text: "The condition is very good. There's minimal highlighting in the first few chapters, but most of the book is clean. All pages are intact and the binding is solid.",
    time: "10:28 AM",
  },
  {
    id: 5,
    senderId: 101,
    text: "Is the textbook still available?",
    time: "10:30 AM",
  },
]

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(mockConversations[0])
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return

    // In a real app, this would send the message to an API
    console.log("Sending message:", newMessage)

    // Clear the input field
    setNewMessage("")
  }

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold">Messages</h1>

      <div className="mt-6 grid h-[calc(100vh-12rem)] grid-cols-1 overflow-hidden rounded-lg border md:grid-cols-[300px_1fr]">
        {/* Conversations List */}
        <div className="flex flex-col border-r">
          <div className="border-b p-3">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search conversations..." className="pl-9" />
            </div>
          </div>
          <div className="flex-1 overflow-auto">
            {mockConversations.map((conversation) => (
              <button
                key={conversation.id}
                className={`w-full border-b p-3 text-left transition-colors hover:bg-muted ${
                  selectedConversation.id === conversation.id ? "bg-muted" : ""
                }`}
                onClick={() => setSelectedConversation(conversation)}
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <Avatar>
                      <AvatarImage src={conversation.user.avatar} alt={conversation.user.name} />
                      <AvatarFallback>{conversation.user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {conversation.user.online && (
                      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-background"></span>
                    )}
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{conversation.user.name}</p>
                      <span className="text-xs text-muted-foreground">{conversation.lastMessage.time}</span>
                    </div>
                    <p className="truncate text-sm text-muted-foreground">{conversation.lastMessage.text}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Re: {conversation.listing.title} - ${conversation.listing.price}
                    </p>
                  </div>
                  {!conversation.lastMessage.isRead && (
                    <Badge className="ml-auto flex h-6 w-6 items-center justify-center rounded-full p-0">•</Badge>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        {selectedConversation ? (
          <div className="flex h-full flex-col">
            {/* Chat Header */}
            <div className="flex items-center justify-between border-b p-3">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={selectedConversation.user.avatar} alt={selectedConversation.user.name} />
                  <AvatarFallback>{selectedConversation.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{selectedConversation.user.name}</p>
                  <p className="text-xs text-muted-foreground">
                    Re: {selectedConversation.listing.title} - ${selectedConversation.listing.price}
                  </p>
                </div>
              </div>
              <div>
                <Button variant="outline" size="sm">
                  View Listing
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-auto p-4">
              <div className="space-y-4">
                {mockMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.senderId === "me" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg p-3 ${
                        message.senderId === "me" ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      <p>{message.text}</p>
                      <p
                        className={`mt-1 text-right text-xs ${
                          message.senderId === "me" ? "text-primary-foreground/80" : "text-muted-foreground"
                        }`}
                      >
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Message Input */}
            <div className="border-t p-3">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" type="button">
                  <Paperclip className="h-4 w-4" />
                  <span className="sr-only">Attach file</span>
                </Button>
                <Button variant="outline" size="icon" type="button">
                  <Image className="h-4 w-4" />
                  <span className="sr-only">Attach image</span>
                </Button>
                <Input
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      handleSendMessage()
                    }
                  }}
                  className="flex-1"
                />
                <Button size="icon" type="button" onClick={handleSendMessage}>
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send message</span>
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <h3 className="text-lg font-medium">No conversation selected</h3>
              <p className="text-muted-foreground">Select a conversation to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

