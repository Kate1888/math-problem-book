import { Link } from 'react-router-dom';
import './MainPage.css';

function MainPage() {
	return (
		<div className="MainPage">
			<h1><p align="center">Самостоятельные и контрольные работы по математике 6 класс</p></h1>
			<h1><p align="center"> Оглавление </p></h1>
			<div className='margin-class'><font size="5"><h3>Самостоятельные рыботы:</h3></font></div>
			<ol className='margin-class'>
				<font size="3">
					<li><Link to="individual-work/1"><h3>По теме действия с натуральными числами</h3></Link></li>
					<li><Link to="individual-work/2"><h3>По теме числовые и буквенные выражения</h3></Link></li>
					<li><Link to="individual-work/3"><h3>По теме признаки делимости натуральных чисел</h3></Link></li>
					<li><Link to="individual-work/4"><h3>По теме простые и составные числа</h3></Link></li>
					<li><Link to="individual-work/5"><h3>По теме нахождение наибольшего общего делителя</h3></Link></li>
					<li><Link to="individual-work/6"><h3>По теме нахождение наименьшего общего кратного</h3></Link></li>
					<li><Link to="individual-work/7"><h3>По теме многоугольники</h3></Link></li>
					<li><Link to="individual-work/8"><h3>По теме окружность, круг и многогранники</h3></Link></li>
					<li><Link to="page2.html"><h3>По теме обыкновенные дроби</h3></Link></li>
					<li><Link to="page2.html"><h3>По теме десятичные дроби</h3></Link></li>
					<li><Link to="page2.html"><h3>По теме преобразование обыкновенной дроби в десятичную, десятичное приближение обыкновенной дроби</h3></Link></li>
					<li><Link to="page2.html"><h3>По теме проценты, нахождение процентов от числа</h3></Link></li>
					<li><Link to="page2.html"><h3>По теме нахождение числа по его процентам</h3></Link></li>
					<li><Link to="page2.html"><h3>По теме отношение</h3></Link></li>
					<li><Link to="page2.html"><h3>По теме пропорции</h3></Link></li>
					<li><Link to="page2.html"><h3>По теме процентное отношение двух чисел</h3></Link></li>
					<li><Link to="page2.html"><h3>По теме прямая и обратная пропорциональная зависимость</h3></Link></li>
					<li><Link to="page2.html"><h3>По теме деление числа в данном отношении</h3></Link></li>
					<li><Link to="page2.html"><h3>По теме круг, цилиндер, конус и шар</h3></Link></li>
					<li><Link to="page2.html"><h3>По теме диаграммы</h3></Link></li>
					<li><Link to="page2.html"><h3>По теме комбинаторные задачи</h3></Link></li>
					<li><Link to="page2.html"><h3>По теме положительные и отрицательные числа</h3></Link></li>
					<li><Link to="page2.html"><h3>По теме координатная прямая</h3></Link></li>
					<li><Link to="page2.html"><h3>По теме целые и рациональные числа</h3></Link></li>
					<li><Link to="page2.html"><h3>По теме модуль числа</h3></Link></li>
					<li><Link to="page2.html"><h3>По теме сравнение рациональных чисел</h3></Link></li>
					<li><Link to="page2.html"><h3>По теме сложение рациональных чисел</h3></Link></li>
					<li><Link to="page2.html"><h3>По теме вычитание рациональных чисел</h3></Link></li>
					<li><Link to="page2.html"><h3>По теме умножение рациональных чисел</h3></Link></li>
					<li><Link to="page2.html"><h3>По теме деление рациональных чисел</h3></Link></li>
					<li><Link to="page2.html"><h3>По теме решение уравнений</h3></Link></li>
					<li><Link to="page2.html"><h3>По теме решение задач с помощью уравнений</h3></Link></li>
					<li><Link to="page2.html"><h3>По теме перпендикулярная прямая</h3></Link></li>
					<li><Link to="page2.html"><h3>По теме осевая и центральная симметрии</h3></Link></li>
					<li><Link to="page2.html"><h3>По теме параллельные прямые</h3></Link></li>
					<li><Link to="page2.html"><h3>По теме координатная плоскость</h3></Link></li>
					<li><Link to="page2.html"><h3>По теме графики</h3></Link></li>
				</font>
			</ol>
			<div className='margin-class'><font size="5"><h3>Контрольные рыботы:</h3></font></div>
			<ol className='margin-class'>
				<font size="3">
					<li><Link to="page2.html"><h3>По теме натуральные числа</h3></Link></li>
					<li><Link to="page3.html"><h3>По теме геометрические фигуры, фигуры на плоскости</h3></Link></li>
					<li><Link to="page4.html"><h3>По теме дроби</h3></Link></li>
					<li><Link to="page5.html"><h3>По теме рациональные числа</h3></Link></li>
					<li><Link to="page6.html"><h3>Итоговая контрольная работа</h3></Link></li>
				</font>
			</ol>
		</div>
	);
}

export default MainPage;