interface Tweet {
    id: string;
    name: string;
    handle: string;
    content: string;
    avatar: string;
  }
  
  const mockTweets: Tweet[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      handle: "@sarahcodes",
      content: "Frontend Geek has been a game-changer for my interview prep! The comprehensive curriculum and expert-curated content helped me land my dream job. Highly recommend! 🚀 #FrontendGeek",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    {
      id: "2",
      name: "Alex Chen",
      handle: "@alexdevs",
      content: "Just aced my frontend interview thanks to @FrontendGeek! Their interactive challenges and community support made all the difference. If you're prepping for tech interviews, this is the place to be! 💻✨",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      handle: "@emilytechie",
      content: "Frontend Geek's roadmap guided me through my learning journey. From basics to advanced concepts, it's all there. Plus, the practice questions are spot on! Thank you @FrontendGeek team! 🙏 #TechInterviews",
      avatar: "/placeholder.svg?height=40&width=40"
    }
  ];
  
  export async function fetchTweets(): Promise<Tweet[]> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real-world scenario, you would make an API call here
    // For now, we'll return our mock data
    return mockTweets;
  }
  
  