/**
 * Copyright Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// [START classroom_update_course]
/**
 * Updates the section and room of Google Classroom. 
 */
function courseUpdate() {
  var courseId = '123456';
  var course = Classroom.Courses.get(courseId);
  course.section = 'Period 3';
  course.room = '302';
  var course = Classroom.Courses.update(course, courseId);
  Logger.log('Course "%s" updated.', course.name);
}
// [END classroom_update_course]