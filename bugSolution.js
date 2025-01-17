The solution is to URL encode the URI before passing it to the Image component. Here's an example:

```javascript
import * as React from 'react';
import { Image } from 'expo-image';

const MyComponent = () => {
  const imageUri = 'https://example.com/image with spaces.jpg';
  const encodedUri = encodeURI(imageUri);

  return (
    <Image
      source={{ uri: encodedUri }}
      style={{ width: 200, height: 200 }}
    />
  );
};

export default MyComponent;
```

This ensures that the URI is properly formatted and handled by the `Image` component, resolving the loading issue.