import course from './course';
import author from './author';
import category from './category';
import module from './module';
import section from './section';
import lesson from './lesson';
import siteSettings from './siteSettings';
import codeBlock from './codeBlock'; // Import the new codeBlock schema

export const schemaTypes = [course, author, category, module, section, lesson, siteSettings, codeBlock];
