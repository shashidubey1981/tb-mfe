

// Get API base URL from environment variable or default to localhost:3001
const getApiBaseUrl = () => {
    return process.env.NEXT_PUBLIC_API_BASE_URL || process.env.API_BASE_URL || 'http://localhost:8080';
}

export const getWebConfigEntries = async (contentTypeUid: string, locale: string) => {
    try {
        const queryParams = `locale=${locale}&contentTypeUid=${contentTypeUid}`
        const apiBaseUrl = getApiBaseUrl();
        const response = await fetch(`${apiBaseUrl}/api/contentstack/web-config?${queryParams.toString()}`);
        const data = await response.json();
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${data.message}`)
        }
        const entriesData = data;
        return entriesData;
    } catch (error) {
        // const apiBaseUrl = getApiBaseUrl();
        // if (error instanceof TypeError && error.message.includes('fetch failed')) {
        //     throw new Error(`Failed to connect to API server at ${apiBaseUrl}. Please ensure the API server is running. Original error: ${error.message}`);
        // }
        // throw error;
        return getMockWebConfig();
    }
}

export const getNavigationConfigEntries = async (contentTypeUid: string, locale: string) => {
    try {
        const queryParams = `locale=${locale}&contentTypeUid=${contentTypeUid}`
        const apiBaseUrl = getApiBaseUrl();
        const response = await fetch(`${apiBaseUrl}/api/contentstack/navigation-config?${queryParams.toString()}`);
        const data = await response.json();
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${data.message}`)
        }
        const entriesData = data;
        return entriesData;
    } catch (error) {
        // const apiBaseUrl = getApiBaseUrl();
        // if (error instanceof TypeError && error.message.includes('fetch failed')) {
        //     throw new Error(`Failed to connect to API server at ${apiBaseUrl}. Please ensure the API server is running. Original error: ${error.message}`);
        // }
        // throw error;
        return getMockNavigationConfig();
    }
}


export const getLandingPageEntries = async (contentTypeUid: string, locale: string, personalizedVariant: string) => {
    try {
        const queryParams = `locale=${locale}&contentTypeUid=${contentTypeUid}&personalizedVariant=${personalizedVariant}`
        const apiBaseUrl = getApiBaseUrl();
        const response = await fetch(`${apiBaseUrl}/api/contentstack/entries?${queryParams.toString()}`);
        const data = await response.json();
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${data.message}`)
        }
        const entriesData = data;
        return entriesData;
    } catch (error) {
        // const apiBaseUrl = getApiBaseUrl();
        // if (error instanceof TypeError && error.message.includes('fetch failed')) {
        //     throw new Error(`Failed to connect to API server at ${apiBaseUrl}. Please ensure the API server is running. Original error: ${error.message}`);
        // }
        // throw error;
        if(contentTypeUid === 'home_page') {
            return getMockHomePageData();
        } else if(contentTypeUid === 'category_landing_page') {
            return getMockCategoryPageData();
        }
    }
}

const getMockWebConfig = async () => {
    return {
        "logo": {
          "content_type": "image/svg+xml",
          "file_size": "13478",
          "filename": "mw_icon_logo.svg",
          "is_dir": false,
          "url": "https://images.contentstack.io/v3/assets/blt72b7c04a5603cbef/blt4b55b7871812cd89/695ed12798e97eac462ecfa7/mw_icon_logo.svg",
          "title": "mw_icon_logo.svg"
        },
        "quick_links": {
          "items": [
            {
              "link_text": "Black Friday Deals 2025",
              "link": "/c/mens-clothing-sale/black-friday-deal"
            },
            {
              "link_text": "Cyber Monday Deals 2025",
              "link": "/c/mens-clothing-sale/cyber-monday-deal"
            }
          ]
        },
        "consent_modal": {
          "heading": "Cookie Settings",
          "content": "This website uses cookies to enhance user experience and to analyze performance and traffic on our website. We also share information about your use of our site with our social media, advertising and analytics partners.",
          "icon": {
            "content_type": "image/svg+xml",
            "file_size": "2428",
            "filename": "cookie-icon.svg",
            "is_dir": false,
            "url": "https://images.contentstack.io/v3/assets/blt72b7c04a5603cbef/bltb08019bf97e9ea91/6912547b54f1fb235561bdd4/cookie-icon.svg",
            "title": "cookie-icon.svg"
          },
          "consent_actions": [
            {
              "label": "Accept Cookies",
              "action": "optIn"
            },
            {
              "label": "Reject",
              "action": "optOut"
            }
          ]
        }
      }
}

const getMockNavigationConfig = async () => {
    return {
        "header": [
          {
            "logo": {
              "logo_image": {
                "content_type": "image/svg+xml",
                "file_size": "13478",
                "filename": "mw_icon_logo.svg",
                "is_dir": false,
                "url": "https://images.contentstack.io/v3/assets/blt72b7c04a5603cbef/blt4b55b7871812cd89/695ed12798e97eac462ecfa7/mw_icon_logo.svg"
              },
              "link": "/",
              "alt_text": "TMW Logo"
            },
            "promotion_bar": {
              "enabled": true,
              "text": "LIMITED TIME ONLY! FREE STANDARD SHIPPING WITH CODE FREESHIPPING",
              "link": "/",
              "background_color": "#763030",
              "font_color": "#ffffff"
            },
            "catalog_search_place_holder": "What are you looking for?",
            "nav_items": [
              {
                "text": "Suits",
                "mega_menu": [
                  {
                    "sections": {
                      "links": [
                        {
                          "link": "/c/mens-clothing/mens-suits",
                          "link_text": "Suits"
                        },
                        {
                          "link": "/",
                          "link_text": "Suit Jackets"
                        },
                        {
                          "link": "/",
                          "link_text": "Suit Pants"
                        }
                      ]
                    },
                    "sub_sections": {
                      "links": [
                        {
                          "link": "/",
                          "link_text": "Awearness Kenneth Cole CHILLFLEX"
                        },
                        {
                          "link": "/",
                          "link_text": "Made In USA"
                        },
                        {
                          "link": "/",
                          "link_text": "The Tailored Shop"
                        }
                      ]
                    },
                    "feature_cards": [
                      {
                        "image": {
                          "content_type": "image/avif",
                          "file_size": "46868",
                          "filename": "25-5069671-sport-coats-desktop.avif",
                          "is_dir": false,
                          "url": "https://images.contentstack.io/v3/assets/blt72b7c04a5603cbef/bltaa651575e07f252c/696031ddc2b7d90008b8e665/25-5069671-sport-coats-desktop.avif"
                        },
                        "title": "Wedding Suits",
                        "subtitle": "shop now",
                        "link": "/"
                      }
                    ]
                  }
                ]
              },
              {
                "text": "Sport Coats",
                "mega_menu": [
                  {
                    "sections": {
                      "links": [
                        {
                          "link": "/",
                          "link_text": "Sport Coats"
                        },
                        {
                          "link": "/",
                          "link_text": "Blazers"
                        },
                        {
                          "link": "/",
                          "link_text": "Dinner Jackets"
                        }
                      ]
                    },
                    "sub_sections": {
                      "links": [
                        {
                          "link": "/",
                          "link_text": "Dinner Jackets & Tuxedos"
                        },
                        {
                          "link": "/",
                          "link_text": "Sport Coat Fit Guide"
                        },
                        {
                          "link": "/",
                          "link_text": "Custom Clothing"
                        }
                      ]
                    },
                    "feature_cards": [
                      {
                        "image": {
                          "content_type": "image/avif",
                          "file_size": "43302",
                          "filename": "25-5067149-HP02-4.avif",
                          "is_dir": false,
                          "url": "https://images.contentstack.io/v3/assets/blt72b7c04a5603cbef/blt848f7af25dee9397/696031ca818dc30008b317ce/25-5067149-HP02-4.avif"
                        },
                        "title": "Casual Pants & Chinos",
                        "subtitle": "shop now",
                        "link": "/"
                      },
                      {
                        "image": {
                          "content_type": "image/avif",
                          "file_size": "74355",
                          "filename": "25-5067149-HP02-1.avif",
                          "is_dir": false,
                          "url": "https://images.contentstack.io/v3/assets/blt72b7c04a5603cbef/blt7656547955f5aee8/696031ca3aee400008837ea6/25-5067149-HP02-1.avif"
                        },
                        "title": "Chillflex Dress Shirts",
                        "subtitle": "shop now",
                        "link": "/"
                      }
                    ]
                  }
                ]
              },
              {
                "text": "Dress Shirts",
                "mega_menu": [
                  {
                    "sections": {
                      "links": [
                        {
                          "link": "/",
                          "link_text": "Dress Shirts"
                        },
                        {
                          "link": "/",
                          "link_text": "Formal Shirts"
                        },
                        {
                          "link": "/",
                          "link_text": "Designer Dress Shirts"
                        },
                        {
                          "link": "/",
                          "link_text": "Long Sleeve Button Up Shirts"
                        }
                      ]
                    },
                    "sub_sections": {
                      "links": [
                        {
                          "link": "/",
                          "link_text": "Best Sellers"
                        },
                        {
                          "link": "/",
                          "link_text": "New Arrivals"
                        },
                        {
                          "link": "/",
                          "link_text": "Performance 4-Way Stretch"
                        }
                      ]
                    },
                    "feature_cards": [
                      {
                        "image": {
                          "content_type": "image/avif",
                          "file_size": "46868",
                          "filename": "25-5069671-sport-coats-desktop.avif",
                          "is_dir": false,
                          "url": "https://images.contentstack.io/v3/assets/blt72b7c04a5603cbef/bltaa651575e07f252c/696031ddc2b7d90008b8e665/25-5069671-sport-coats-desktop.avif"
                        },
                        "title": "Online Only - Dress Shirts $24.99",
                        "subtitle": "Shop Now",
                        "link": "/"
                      },
                      {
                        "image": {
                          "content_type": "image/avif",
                          "file_size": "32600",
                          "filename": "25-5069671-dress-shirts-desktop.avif",
                          "is_dir": false,
                          "url": "https://images.contentstack.io/v3/assets/blt72b7c04a5603cbef/blta9a44b15a1cff7af/696031ddc2b7d90008b8e669/25-5069671-dress-shirts-desktop.avif"
                        },
                        "title": "Chillflex Dress Shirts",
                        "subtitle": "shop now",
                        "link": "/"
                      }
                    ]
                  }
                ]
              },
              {
                "text": "Pants",
                "mega_menu": [
                  {
                    "sections": {
                      "links": [
                        {
                          "link": "/",
                          "link_text": "All Pants"
                        },
                        {
                          "link": "/",
                          "link_text": "Dress Pants"
                        },
                        {
                          "link": "/",
                          "link_text": "Casual Pants & Chinos"
                        }
                      ]
                    },
                    "sub_sections": {
                      "links": [
                        {
                          "link": "/",
                          "link_text": "Joseph Abboud Indigo Blue"
                        },
                        {
                          "link": "/",
                          "link_text": "Dress Pants Fit Guide"
                        }
                      ]
                    },
                    "feature_cards": [
                      {
                        "image": {
                          "content_type": "image/avif",
                          "file_size": "52356",
                          "filename": "25-5067149-HP02-3.avif",
                          "is_dir": false,
                          "url": "https://images.contentstack.io/v3/assets/blt72b7c04a5603cbef/blte905a234edc38b9c/696031caf4f25c00087a8a81/25-5067149-HP02-3.avif"
                        },
                        "title": "Casual Pants & Chinos",
                        "subtitle": "shop now",
                        "link": "/"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
}

const getMockHomePageData = async () => {
    return {
        "url": "/",
        "components": [
          {
            "teaser": {
              "heading": "Enrich your website with Appealing Teaser",
              "content": "Content required for describe the Teaser heading. Better to have 5 to 7 lines of description.",
              "cta": [
                {
                  "text": "Text for describing call to action",
                  "external_url": "/",
                  "link": []
                }
              ],
              "image": [
                {
                  "image": {
                    "content_type": "image/jpeg",
                    "file_size": "4148405",
                    "filename": "teaser.jpeg",
                    "is_dir": false,
                    "url": "https://images.contentstack.io/v3/assets/blt72b7c04a5603cbef/blt18bf06dee47f6e58/6912546666ece05c7603ef17/teaser.jpeg"
                  },
                  "image_alt_text": "Alt Text for Image in Teaser"
                }
              ],
              "video": {
                "video_alt_text": "Alt Text for Video in Teaser"
              },
              "styles": {
                "text_align": "Left"
              }
            }
          }
        ],
        "hero": [
          {
            "heading": "ONLINE ONLY | ENDS JANUARY 14",
            "content": "Big Deal Clearance UP To 70% OFF ORIGINAL PRICES SHOP ALL",
            "cta": [
              {
                "text": "Shop now",
                "external_url": "/",
                "link": []
              }
            ],
            "image": [
              {
                "image": {
                  "content_type": "image/webp",
                  "file_size": "238469",
                  "filename": "machu-picchu-peru.webp",
                  "is_dir": false,
                  "url": "https://images.contentstack.io/v3/assets/blt72b7c04a5603cbef/blt744f3b420c1d6918/6912547b9112825d0b242d96/machu-picchu-peru.webp"
                },
                "image_alt_text": "Alt Text for Image in Banner"
              }
            ],
            "video": {
              "video_alt_text": "Alt Text for Video in Banner"
            },
            "styles": {
              "text_align": "Left"
            },
            "title": "Home Page Hero"
          }
        ],
        "seo": {
          "title": "Home Page",
          "description": "Home Page",
          "canonical_url": "/",
          "no_follow": true,
          "no_index": true
        }
      }
}

const getMockCategoryPageData = async () => {
    return {
        "url": "/c",
        "components": [
          {
            "api_component": {
              "component_name": "guided_filter"
            }
          },
          {
            "api_component": {
              "component_name": "filters"
            }
          },
          {
            "pgp_collection": {
              "cards": [
                {
                  "cta": {
                    "text": "Shop now",
                    "link": "/c/mens-clothing/mens-suits"
                  },
                  "image": {
                    "content_type": "image/avif",
                    "file_size": "46868",
                    "filename": "25-5069671-sport-coats-desktop.avif",
                    "is_dir": false,
                    "url": "https://images.contentstack.io/v3/assets/blt72b7c04a5603cbef/bltaa651575e07f252c/696031ddc2b7d90008b8e665/25-5069671-sport-coats-desktop.avif"
                  },
                  "title": "Sport Coats",
                  "subtitle": "Starting at $49.99"
                },
                {
                  "cta": {
                    "text": "Shop now",
                    "link": "/c/mens-clothing/sport-coats-dinner-jackets"
                  },
                  "image": {
                    "content_type": "image/avif",
                    "file_size": "37232",
                    "filename": "25-5069671-casual-wear-desktop.avif",
                    "is_dir": false,
                    "url": "https://images.contentstack.io/v3/assets/blt72b7c04a5603cbef/blte9975c11d8986c3f/696031dda3a8ca0008a7c986/25-5069671-casual-wear-desktop.avif"
                  },
                  "title": "Dress Shirts",
                  "subtitle": "Starting at $19.99"
                },
                {
                  "cta": {
                    "text": "Shop now",
                    "link": "/c/men-suits/suit-jacket"
                  },
                  "image": {
                    "content_type": "image/avif",
                    "file_size": "52356",
                    "filename": "25-5067149-HP02-3.avif",
                    "is_dir": false,
                    "url": "https://images.contentstack.io/v3/assets/blt72b7c04a5603cbef/blte905a234edc38b9c/696031caf4f25c00087a8a81/25-5067149-HP02-3.avif"
                  },
                  "title": "Shoes",
                  "subtitle": "Starting at $54.99"
                },
                {
                  "cta": {
                    "text": "Shop now",
                    "link": "/c/mens-clothing/mens-suits"
                  },
                  "image": {
                    "content_type": "image/avif",
                    "file_size": "37042",
                    "filename": "25-5067149-HP02-2.avif",
                    "is_dir": false,
                    "url": "https://images.contentstack.io/v3/assets/blt72b7c04a5603cbef/bltc9e0716e1c0a0132/696031cac2b7d90008b8e661/25-5067149-HP02-2.avif"
                  },
                  "title": "Casual Wear",
                  "subtitle": "Starting at $14.99"
                }
              ]
            }
          },
          {
            "quick_links": {
              "title": "Quick links to popular searches"
            }
          }
        ],
        "seo": {
          "title": "Title",
          "description": "Description",
          "canonical_url": "/",
          "no_follow": true,
          "no_index": true
        }
      }
}