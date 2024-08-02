declare module '@sanity/block-content-to-react' {
    import * as React from 'react';
  
    interface BlockContentProps {
      blocks: any;
      serializers?: any;
      className?: string;
      renderContainerOnSingleChild?: boolean;
      projectId?: string;
      dataset?: string;
      imageOptions?: any;
    }
  
    const BlockContent: React.FC<BlockContentProps>;
    export default BlockContent;
  }
  