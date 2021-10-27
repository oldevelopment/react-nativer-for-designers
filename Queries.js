import { gql } from "@apollo/client";

export const CardsQuery = gql`
  {
    cardCollection {
      items {
        title
        image {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        subTitle
        caption
        logo {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        content
      }
    }
  }
`;
export const ProjectscardsQuery = gql`
  {
    projectscardCollection {
      items {
        title
        image {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        subTitle
        caption
        logo {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        content
        author
      }
    }
  }
`;
export const CourseQuery = gql`
  {
    courseCollection {
      items {
        title
        subTitle
        author
        caption
        image {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }

        avatar {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        logo {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        content
      }
    }
  }
`;
export const LatestQuery = gql`
  {
    latestCollection {
      items {
        title
        subTitle
        author
        caption
        image {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }

        avatar {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        logo {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        content
      }
    }
  }
`;
export const LogoQuery = gql`
  {
    logoCollection {
      items {
        name
        logo {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
      phone
      }
    }
  }
`;

export const ProjectQuery = gql`
{
  projectsCollection {
    items {
     image {
       title
       description
       contentType
       fileName
       size
       url
       width
       height
     }
    }
  }
}`;

export const WorkQuery = gql`
{
  workCollection {
    items {
      title
      author
      image {
        title
        description
        contentType
        fileName
        size
        url
        width
        height
      }
      text
      title2
    }
  }
}`;
