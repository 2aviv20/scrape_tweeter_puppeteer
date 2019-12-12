export interface TwitterObject {
    globalObjects: {
        broadcasts: {};
        cards: {};
        media: {};
        moments: {};
        places: {};
        tweets: Tweets;
        users: Users;
    }
    timeline: {
        id:string;
        instructions:any;
        responseObjects:any;
    };
}

interface Tweets {
    conversation_id_str: String;
    created_at: String;
    display_text_range: number[];
    entities: {
        hashtags: Hashtags[];
        media: Media[];
    }
    extended_entities: ExtendedEntities;
    favorite_count: number;
    full_text: String;
    id_str: String;
    lang: String;
    possibly_sensitive_editable: boolean;
    reply_count: number;
    retweet_count: number;
    source: String;
    user_id_str: String;
}


interface Hashtags {
    indices: number[];
    text: string;
}

interface Media {
    display_url: string;
    expanded_url: string;
    id_str: string;
    indices: number[];
    media_url: string;
    media_url_https: string;
    original_info: { width: number, height: number }
    sizes: {
        large: Sizes;
        medium: Sizes;
        small: Sizes;
        thumb: Sizes;
        type: string;
        url: string;
    };
    type: string;
    url: string;
}

interface ExtendedEntities {
    media: ExtendedEntitiesMedia;
    favorite_count: number;
    full_text: string;
    id_str: string;
    lang: string;
    possibly_sensitive_editable: boolean;
    reply_count: number;
    retweet_count: number;
    source: string;
    user_id_str: string;
}

interface ExtendedEntitiesMedia {
    additional_media_info: { title: string, description: string, embeddable: boolean, monetizable: boolean }
    display_url: string
    expanded_url: string
    ext: any;
    ext_alt_text: any
    ext_media_availability: any;
    ext_media_color: any;
    id_str: string;
    indices: number[];
    media_key: string;
    media_url: string;
    media_url_https: string;
    original_info: { width: number, height: number }
    sizes: {
        large: Sizes;
        medium: Sizes;
        small: Sizes;
        thumb: Sizes;
    }
    type: string;
    url: string;
    video_info: {
        aspect_ratio: number;
        duration_millis: number;
        variants: {
            bitrate: number;
            content_type: string;
            url: string;
        }[];
    }
}

interface Sizes {
    w: number;
    h: number;
    resize: number;
}

//users
//_________________________________________
 interface Users{
    advertiser_account_service_levels: any[];
    advertiser_account_type: string;
    business_profile_state: string;
    can_dm: boolean
    created_at: string;
    default_profile: true;
    description: string;
    entities: {description: {}}
    fast_followers_count: number;
    favourites_count: number;
    followers_count: number;
    friends_count: number;
    geo_enabled: true
    id_str: string;
    listed_count: number;
    location: string;
    media_count: number;
    name: string;
    normal_followers_count: number;
    pinned_tweet_ids: any[];
    pinned_tweet_ids_str: any[];
    profile_banner_extensions: {mediaStats: {r: {missing: any}, ttl: number}};
    profile_banner_extensions_alt_text: any;
    profile_banner_extensions_media_availability: any;
    profile_banner_extensions_media_color: {
        palette: {rgb: {red: number, green: number, blue: number}, percentage: number}[];
        profile_banner_url: string;
    }
    profile_banner_url: string;
    profile_image_extensions: {mediaStats: {r: {missing: any}, ttl: number}};
    profile_image_extensions_alt_text: any;
    profile_image_extensions_media_availability: any;
    profile_image_extensions_media_color: {
        palette: {rgb: {red: number, green: number, blue: number}, percentage: number}[];
        profile_banner_url: string;
    }
    profile_image_url_https: string;
    profile_interstitial_type: string;
    profile_link_color: string;
    screen_name: string;
    statuses_count: number;
    translator_type: string;
 }