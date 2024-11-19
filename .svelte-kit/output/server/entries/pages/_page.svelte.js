import { c as create_ssr_component, v as validate_component, b as add_attribute, d as each, e as escape } from "../../chunks/ssr.js";
import { C as CTAs, H as Header } from "../../chunks/Header.js";
const Conversion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="py-14 md:py-20 flex flex-col gap-8 bg-[#181b34] text-white text-center items-center justify-center"><h4 class="text-xl sm:text-2xl md:text-3xl poppins" data-svelte-h="svelte-tp4g32">Reach your fitness <span class="poppins font-bold">goals and aspirations</span></h4> <p class="poppins text-base sm:text-lg md:text-xl" data-svelte-h="svelte-1cwiryn">✦ Unlimited time on Free plan ✦</p> ${validate_component(CTAs, "CtAs").$$render($$result, { dark: true }, {}, {})}</section>`;
});
const SectionWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<section${add_attribute("id", id, 0)}${add_attribute("class", "min-h-screen flex flex-col px-4 ", 0)}><div class="flex flex-col flex-1 max-w-[1400px] mx-auto w-full">${slots.default ? slots.default({}) : ``}</div></section>`;
});
const FAQs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let faqs = [
    {
      question: "What is Dhanushy Fitness?",
      ans: "Dhanushy Fitness is a fun fitness app designed to make your workouts enjoyable by incorporating interactive games and challenges."
    },
    {
      question: "How do I download Dhanushy Fitness?",
      ans: "You can download Dhanushy Fitness from the App Store (for iOS) or Google Play Store (for Android) on your mobile device."
    },
    {
      question: "Is Dhanushy Fitness free to use?",
      ans: "Yes, Dhanushy Fitness offers a free version with basic features. There is also a premium subscription that unlocks additional games and advanced workout tracking."
    },
    {
      question: "What types of workouts does Dhanushy Fitness offer?",
      ans: "Dhanushy Fitness offers a variety of workouts, including cardio, strength training, and flexibility exercises. The workouts are designed to be engaging and entertaining."
    },
    {
      question: "Can I connect Dhanushy Fitness to my fitness tracker?",
      ans: "Yes, Dhanushy Fitness supports integration with popular fitness trackers, allowing you to sync your workout data and track your progress seamlessly."
    },
    {
      question: "Are there multiplayer features in Dhanushy Fitness?",
      ans: "Yes, Dhanushy Fitness includes multiplayer challenges, allowing you to compete with friends or join group workouts for a more interactive and social experience."
    },
    {
      question: "How does Dhanushy Fitness motivate users to stay active?",
      ans: "Dhanushy Fitness employs a reward system, where users earn points and achievements for completing workouts. These rewards can be used to unlock new levels, challenges, and in-app content."
    },
    {
      question: "Can I customize my workouts in Dhanushy Fitness?",
      ans: "Absolutely! Dhanushy Fitness allows users to customize their workouts based on personal preferences, fitness goals, and available equipment."
    },
    {
      question: "Is there a beginner-friendly mode in Dhanushy Fitness?",
      ans: "Yes, Dhanushy Fitness offers a beginner-friendly mode with easier exercises and lower intensity workouts, making it suitable for users at various fitness levels."
    },
    {
      question: "How often should I use Dhanushy Fitness for optimal results?",
      ans: "The frequency of Dhanushy Fitness workouts depends on your fitness goals. It is recommended to engage in at least 3-5 sessions per week for noticeable results."
    }
  ];
  return `${validate_component(SectionWrapper, "SectionWrapper").$$render($$result, { id: "faqs" }, {}, {
    default: () => {
      return `<div class="flex flex-col gap-10 sm:gap-14 md:gap-24 py-20 flex-1 items-center justify-center"><div class="flex flex-col gap-2" data-svelte-h="svelte-1lgnd0c"><p class="opacity-60 text-base sm:text-lg md:text-xl text-center">For all your questions, qualms &amp; queries</p> <h3 class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center">Frequently Asked Questions</h3></div> <div class="flex flex-col gap-8 sm:gap-10 md:gap-14 w-full">${each(faqs, (faq) => {
        return `<div class="flex flex-col gap-2 text-left max-w-[800px] w-full mx-auto relative p-4 px-6"><div class="absolute top-0 left-0 w-1/3 h-[1px] bg-slate-950 -translate-x-4"></div> <div class="absolute top-0 left-0 h-2/3 w-[1px] bg-slate-950 -translate-y-4"></div> <h4 class="text-lg sm:text-xl md:text-2xl pt-2">${escape(faq.question)}</h4> <p class="pl-2">${escape(faq.ans)}</p> </div>`;
      })}</div></div>`;
    }
  })}`;
});
const Stars = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex items-center justify-center gap-2 text-base"><p data-svelte-h="svelte-rxj6ns">4.6</p> ${each([0, 1, 2, 3, 4], (index) => {
    return `<div class="grid place-items-center relative" data-svelte-h="svelte-1tpxl5g"><i class="fa-solid fa-star opacity-0"></i> <div${add_attribute("class", "absolute top-0 left-0 grid place-items-center " + (index === 4 ? "w-[60%] overflow-hidden" : " "), 0)}><i class="fa-solid fa-star text-amber-400"></i></div> </div>`;
  })} <p data-svelte-h="svelte-1ufltmw">500+</p></div>`;
});
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SectionWrapper, "SectionWrapper").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <div class="flex flex-col gap-10 flex-1 items-center justify-center pb-10 md:pb-14"><h2 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-[1200px] mx-auto w-full text-center font-semibold" data-svelte-h="svelte-1uenxtx"><span class="text-indigo-400">Gym</span> Training
            <span class="text-slate-600 line-through">Is Hard</span><br>
            Just Got <span class="text-indigo-400">Easier</span></h2> <p class="text-xl sm:text-2xl md:text-3xl text-center max-w-[1000px] mx-auto w-full" data-svelte-h="svelte-9unlqd">Less thinking &amp; more doing. We&#39;re the trainer in your pocket full of <span class="italic">personalized workouts, exercise explanations, analytics</span> and much much more.</p> ${validate_component(CTAs, "CtAs").$$render($$result, {}, {}, {})} ${validate_component(Stars, "Stars").$$render($$result, {}, {}, {})}</div>`;
    }
  })}`;
});
const ProductCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { index } = $$props;
  let { productFeature } = $$props;
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.productFeature === void 0 && $$bindings.productFeature && productFeature !== void 0)
    $$bindings.productFeature(productFeature);
  return `<div class="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-14 lg:gap-20 relative text-base"><div${add_attribute("class", "flex flex-col gap-8 md:gap-10 pt-8 sm:pt-10 " + (index % 2 === 1 ? " md:order-2" : " "), 0)}><h4 class="text-2xl sm:text-3xl md:text-4xl max-w-[1000px] w-full font-medium relative pr-10 after:absolute after:top-full after:left-0 after:w-1/5 after:h-1.5 after:mt-1 after:bg-slate-900">${slots.default ? slots.default({}) : ``}</h4> <p>${escape(productFeature.description)}</p> <div class="flex flex-col gap-3">${each(productFeature.featureList, (listItem) => {
    return `<div class="flex gap-2 items-center"><div class="grid place-items-center px-1.5 text-xs sm:text-sm aspect-square rounded-full border-[1.5px] bg-white border-solid border-green-300" data-svelte-h="svelte-90be6e"><i class="fa-solid fa-bolt text-green-400"></i></div> <p>${escape(listItem)}</p> </div>`;
  })}</div> <div class="flex items-center" data-svelte-h="svelte-1rvnyby"><button class="specialBtnDark mr-auto font-semibold"><p>Try free today →</p></button></div></div> <div${add_attribute("class", "flex flex-col dropShadow overflow-hidden rounded-b-lg ", 0)}><div class="rounded-t-xl h-8 sm:h-10 bg-white opacity-60 px-3 flex items-center gap-2">${each([1, 2, 3], (i) => {
    return `<div class="rounded-full aspect-square w-2.5 sm:w-3 bg-indigo-300"></div>`;
  })}</div> <div class="flex flex-col bg-white gap-4 flex-1"><img${add_attribute("src", productFeature.imgUrl, 0)} alt="product-img"></div></div></div>`;
});
const Product = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let productFeatures = [
    {
      featureList: [
        "Daily streak counter",
        "Weights and reps tracker",
        "Community challenges",
        "Every workout is new and exciting"
      ],
      description: "Dhanushy Fitness ensures all users have the information they need to train safely and train effectively.",
      imgUrl: "assets/selection.png"
    },
    {
      featureList: [
        "Select your preferences",
        "Personalize your workouts",
        "Customize your training",
        "Guarantees progress on all core exercises"
      ],
      description: "Build you streaks and see your progress with our amazing tracking and analytics features.",
      imgUrl: "assets/training.png"
    },
    {
      featureList: [
        "Eliminating guesswork",
        "Save time",
        "Achieve the performance you seek",
        "Builds functional strength"
      ],
      description: "Enter as much information about yourself as you desire to ensure all workouts are personalized to your every need.",
      imgUrl: "assets/goal.png"
    }
  ];
  return `${validate_component(SectionWrapper, "SectionWrapper").$$render($$result, { id: "product" }, {}, {
    default: () => {
      return `<div class="flex flex-col gap-10 sm:gap-14 md:gap-24 flex-1 items-center justify-center pb-10 md:pb-14"><div class="flex flex-col gap-2" data-svelte-h="svelte-1ejkod1"><p class="opacity-60 text-base sm:text-lg md:text-xl text-center">Start your lifetime <span class="text-indigo-400">gym streak</span> today</p> <h3 class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center">Features For Everyone</h3></div> ${each(productFeatures, (productFeature, index) => {
        return `${validate_component(ProductCard, "ProductCard").$$render($$result, { productFeature, index }, {}, {
          default: () => {
            return `${index === 0 ? `Experience a beginner exercise <span class="text-indigo-400 font-medium" data-svelte-h="svelte-1ot4zwv">master</span> class` : `${index === 1 ? `Lay the foundations for <span class="text-indigo-400 font-medium" data-svelte-h="svelte-17nj9d">routine</span> and consistency` : `Workouts specific to your <span class="text-indigo-400 font-medium" data-svelte-h="svelte-1h3ikau">environment</span>
                    and
                    <span class="text-indigo-400 font-medium" data-svelte-h="svelte-is86ky">expertise</span>`}`} `;
          }
        })}`;
      })}</div>`;
    }
  })}`;
});
const ReviewCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { reviewItem } = $$props;
  let { left } = $$props;
  let { index } = $$props;
  if ($$props.reviewItem === void 0 && $$bindings.reviewItem && reviewItem !== void 0)
    $$bindings.reviewItem(reviewItem);
  if ($$props.left === void 0 && $$bindings.left && left !== void 0)
    $$bindings.left(left);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  return `<div${add_attribute(
    "class",
    "flex flex-col gap-2 w-full max-w-[500px] mx-auto relative " + (left ? index % 2 === 1 ? "hidden md:flex opacity-0 pointer-events-none max-h-[40px] overflow-hidden" : " " : index % 2 === 0 ? "hidden md:flex opacity-0 pointer-events-none max-h-[40px] overflow-hidden" : " "),
    0
  )}><div class="flex relative"><div${add_attribute(
    "class",
    "absolute reounded-full bg-white aspect-square hidden md:grid place-items-center h-4 top-0 " + (index % 2 === 0 ? " right-0 -mr-8 translate-x-1/2" : " left-0 -ml-8 -translate-x-1/2"),
    0
  )}><div class="rounded-full bg-slate-950 aspect-square bg-slate-950 h-2"></div></div> <div class="flex items-center gap-2"><i class="fa-solid fa-user"></i> <h3 class="text-lg sm:text-xl md:text-2xl">${escape(reviewItem.name)}</h3></div></div> <div class="h-[1.5px] bg-slate-950 w-1/4 mr-auto mb-4 mt-2"></div> <div class="flex items-center flex-wrap gap-2 text-xs sm:text-sm mb-4">${each(reviewItem.features, (keywork) => {
    return `<div class="p-1 py-0.5 rounded-md border border-solid border-indigo-400 bg-indigo-50 text-indigo-400"><p>${escape(keywork)}</p> </div>`;
  })}</div> <p>${escape(reviewItem.review)}</p></div>`;
});
const Reviews = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let reviewsList = [
    {
      name: "John Doe",
      review: "Dhanushy Fitness has been a game-changer for my fitness journey! The personalized workout plans and progress tracking tools are amazing, and the community keeps me motivated. I especially love the feature that recommends new workouts based on my goals and strengths.",
      features: [
        "Personalized workout plans",
        "Community features",
        "Workout recommendation system"
      ]
    },
    {
      name: "Jane Smith",
      review: "Dhanushy Fitness is the most user-friendly fitness app I've ever used. The interface is clean and intuitive, and the exercises are easy to follow. I've already seen significant results in just a few weeks. My favorite features are the guided workouts and the ability to log my meals and track my progress.",
      features: ["Guided workouts", "Meal logging and tracking", "User-friendly interface"]
    },
    {
      name: "Michael Brown",
      review: "Dhanushy Fitness is the best investment I've made in my health. It's helped me build muscle, lose weight, and improve my overall fitness level. The variety of workout routines and challenges keeps me engaged, and the nutrition tips are super helpful. I highly recommend this app to anyone looking to get in shape!",
      features: [
        "Variety of workout routines and challenges",
        "Nutrition tips",
        "Progress tracking and challenges"
      ]
    },
    {
      name: "Sarah Williams",
      review: "I'm a busy mom of two, and Dhanushy Fitness has been a lifesaver! It helps me fit in quick and effective workouts even when I'm short on time. I love the timer feature that keeps me on track, and the workout variety ensures I never get bored.",
      features: ["Quick and effective workouts", "Timer feature", "Variety of workouts"]
    },
    {
      name: "David Lee",
      review: "As a seasoned athlete, I was skeptical about any fitness app. But Dhanushy Fitness has surprised me! It offers advanced workout programs and allows me to customize my routines to fit my specific needs. The data analysis is fantastic, helping me track my progress and optimize my performance.",
      features: [
        "Advanced workout programs",
        "Customization options",
        "Detailed data analysis"
      ]
    },
    {
      name: "Ashley Johnson",
      review: "Dhanushy Fitness has helped me overcome my fear of going to the gym. The encouraging community and supportive environment have made me feel comfortable and confident. I love the social features that allow me to connect with other fitness enthusiasts and share my progress.",
      features: ["Supportive community", "Social features", "Encouraging environment"]
    },
    {
      name: "Mark Robinson",
      review: "Dhanushy Fitness is more than just a fitness app; it's a lifestyle change. It's helped me develop healthy habits and make better choices about my diet and exercise. I'm incredibly grateful for this app and the positive impact it's had on my life.",
      features: [
        "Focus on healthy habits",
        "Nutritional guidance",
        "Positive lifestyle impact"
      ]
    }
  ];
  return `${validate_component(SectionWrapper, "SectionWrapper").$$render($$result, { id: "reviews" }, {}, {
    default: () => {
      return `<div class="flex flex-col gap-10 sm:gap-14 md:gap-24 py-20 flex-1 items-center justify-center"><div class="flex flex-col gap-2" data-svelte-h="svelte-qt0hll"><p class="opacity-60 text-base sm:text-lg md:text-xl text-center">Don&#39;t just take our word for it</p> <h3 class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center">See What <span class="text-indigo-400">Others</span> Have To Say</h3></div> <div class="flex flex-col md:flex-row gap-8 w-fit mx-auto"><div class="flex flex-col gap-8">${each(reviewsList.slice(0, 4), (reviewItem, index) => {
        return `${validate_component(ReviewCard, "ReviewCard").$$render($$result, { reviewItem, left: true, index }, {}, {})}`;
      })}</div> <div class="w-[1px] bg-slate-950 hidden md:flex"></div> <div class="flex flex-col gap-8">${each(reviewsList.slice(0, 4), (reviewItem, index) => {
        return `${validate_component(ReviewCard, "ReviewCard").$$render($$result, { reviewItem, index }, {}, {})}`;
      })}</div></div> <button class="specialBtn"><p>${escape("Show More")}</p></button> <div class="flex flex-col gap-10"><p class="mx-auto text-lg sm:text-xl md:text-2xl font-semibold" data-svelte-h="svelte-1prn6p0">Trusted by 1,349 Swoldiers</p> ${validate_component(Stars, "Stars").$$render($$result, {}, {}, {})}</div></div>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="flex flex-col">${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} ${validate_component(Product, "Product").$$render($$result, {}, {}, {})} ${validate_component(Reviews, "Reviews").$$render($$result, {}, {}, {})} ${validate_component(FAQs, "FaQs").$$render($$result, {}, {}, {})} ${validate_component(Conversion, "Conversion").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
