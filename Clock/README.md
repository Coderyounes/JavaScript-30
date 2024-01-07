# CSS + JS Clock

### Vanilla CSS + Tailwind
I didn't Find a way to draw the Clock hands Using Tailwind , after a bit time of search  I find that I should Use vanilla CSS.
Use flexbox property , height & width ..etc using Tailwind

### Vanilla Javascript
Taking advantage of the bilt-in 'Date()' Object , to know the Exact Sec/min/hour.
then based on those detail we calculate the hand positioning Degree

1 - ((hour / 12) * 360 ) + 90 : 
    => hour variable store the 'now.getHours()'
    => 12 Since the Clock Format is only 12
    => 360 is Circle Full Degre
    => 90 is Circle Degree , Starting point(12 O'clock)
    Example: 
        ((3 / 12) * 360 ) + 90 
        (0.25 * 360) + 90
        90 + 90 = 180
        mean Position the hour hand in degree 180 which is 3 o'Clock

2 - ((minutes / 60) * 360) + 90:
    => minutes variable stores the 'now.getMinutes()'
    => 60 because there are 60 minutes in an hour
    => 360 is the full degree of a circle
    => 90 is the degree offset to set the starting point at 12 o'clock
    Example: 
        ((30 / 60) * 360 ) + 90 
        (0.5 * 360) + 90
        180 + 90 = 270
        This positions the minute hand at 270 degrees, which is at the 30-minute mark.

3 - ((seconds / 60) * 360) + 90:
    => seconds variable stores the 'now.getSeconds()'
    => 60 because there are 60 seconds in a minute
    => 360 is the full degree of a circle
    => 90 is the degree offset to set the starting point at 12 o'clock
    Example: 
        ((30 / 60) * 360 ) + 90 
        (0.5 * 360) + 90
        180 + 90 = 270
        This positions the seconds hand at 270 degrees, which is at the 30-second mark.

