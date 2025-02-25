import type {StructureResolver} from 'sanity/structure'
import { project } from './schemaTypes/project'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem("project").title("Projects"),
    ])
